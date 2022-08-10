class Friendship < ApplicationRecord
      validates :user_id, presence: true, uniqueness: { scope: :friend_id }
      validates :friend_id, presence: true, uniqueness: { scope: :user_id }

      belongs_to :user, foreign_key: :user_id, class_name: :User
      belongs_to :friend, foreign_key: :friend_id, class_name: :User
end