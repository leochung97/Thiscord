import * as ServerAPIUtil from "../util/server_api_util";

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
})

const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const clearServerErrors = () => ({
  type: CLEAR_SERVER_ERRORS
});

export const fetchServer = serverId => dispatch => (
  ServerAPIUtil.fetchServer(serverId).then(server => (
    dispatch(receiveServer(server))
  ), err => (
    dispatch(receiveServerErrors(err.responseJSON))
  ))
);

export const fetchServers = userId => dispatch => (
  ServerAPIUtil.fetchServers(userId).then(servers => (
    dispatch(receiveServers(servers))
  ), err => (
    dispatch(receiveServerErrors(err.responseJSON))
  ))
);

export const createServer = server => dispatch => (
  ServerAPIUtil.createServer(server).then(server => (
    dispatch(receiveServer(server))
  ), err => (
    dispatch(receiveServerErrors(err.responseJSON))
  ))
);

export const updateServer = server => dispatch => (
  ServerAPIUtil.updateServer(server).then(server => (
    dispatch(receiveServer(server))
  ), err => (
    dispatch(receiveServerErrors(err.responseJSON))
  ))
);

export const deleteServer = serverId => dispatch => (
  ServerAPIUtil.deleteServer(serverId).then(() => dispatch(removeServer(serverId)))
);