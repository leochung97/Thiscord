import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

const removeChannel = channelId => ({
  type: REMOVE_CHANNEL,
  channelId
});

export const fetchChannel = channelId => dispatch => (
  ChannelAPIUtil.fetchChannel(channelId).then(channel => dispatch(receiveChannel(channel)))
);

export const fetchChannels = serverId => dispatch => (
  ChannelAPIUtil.fetchChannels(serverId).then(channels => dispatch(receiveChannels(channels)))
);

export const createChannel = channel => dispatch => (
  ChannelAPIUtil.createChannel(channel).then(channel => dispatch(receiveChannel(channel)))
);

export const updateChannel = channel => dispatch => (
  ChannelAPIUtil.updateChannel(channel).then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = channelId => dispatch => (
  ChannelAPIUtil.deleteChannel(channelId).then(() => dispatch(removeChannel(channelId)))
);