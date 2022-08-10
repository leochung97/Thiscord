require 'bcrypt'

class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :email, presence: true, uniqueness: true
    validates :user_tag, presence: true, length: { minimum: 4 }
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :user_url, presence: true
    validates :status, presence: true, inclusion: { in: [ "online", "do not disturb", "away", "offline"]}
    validates :description, presence: true, allow_blank: true
    attr_reader :password
    before_validation :ensure_session_token

    has_many :owned_servers, foreign_key: :owner_id, class_name: :Server, dependent: :destroy
    has_many :server_memberships, foreign_key: :user_id, class_name: :ServerMembership, dependent: :destroy
    has_many :servers, through: :server_memberships, source: :server
    has_many :messages, foreign_key: :creator_id, class_name: :Message, dependent: :destroy
    has_many :direct_messages, foreign_key: :creator_id, class_name: :DirectMessage, dependent: :destroy 
    has_many :owned_conversations, foreign_key: :owner_id, class_name: :Conversation 
    has_many :conversation_participated_in, foreign_key: :participant_id, class_name: :ConversationParticipant, dependent: :destroy
    has_many :conversations, through: :conversation_participated_in, source: :conversation 
    has_many :friendships, foreign_key: :user_id, class_name: :Friendship
    has_many :friends, through: :friendships, source: :friend
    # Encryption
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil if @user.nil?
        @user.is_password?(password) ? @user : nil
    end

    private 
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end
end
