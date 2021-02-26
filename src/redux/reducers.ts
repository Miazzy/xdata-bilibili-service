import { AnyAction, combineReducers } from "redux";
import * as ActionTypes from "./action-types";

const initialState = {
  shouldLoad: true,  // 客户端是否加载数据
  oneLevelPartitions: [], // 一级分类
  banners: [],  // 轮播图
  additionalVideos: [],  // 首页额外的video
  partitions: [],  // 分类列表
  rankingPartitions: [], // 排行榜分类列表
  rankingVideos: [], // 排行榜视频
  video: {}, // 视频信息
  upUser: {}, // up主信息,
  liveData: { // 直播数据
    bannerList: [],
    itemList: []
  },
  liveListData: {  // 直播房间列表
    total: 0,
    list: []
  },
  roomData: {}  // 直播间数据
}

function combineShouldLoad(shouldLoad = initialState.shouldLoad, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_SHOULD_LOAD:
      return action.shouldLoad;
    default:
      return shouldLoad;
  }
}

function combineOneLevelPartitions(oneLevelPartitions = initialState.oneLevelPartitions,
  action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_ONE_LEVEL_PARTITIONS:
      return action.oneLevelPartitions;
    default:
      return oneLevelPartitions;
  }
}

function combineBanners(banners = initialState.banners, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_BANNERS:
      return action.banners;
    default:
      return banners;
  }
}

function combineAdditionalVideos(additionalVideos = initialState.additionalVideos,
  action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_ADDITIONAL_VIDEOS:
      return action.additionalVideos;
    default:
      return additionalVideos;
  }
}

function combinePartitions(partitions = initialState.partitions, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_PARTITIONS:
      return action.partitions;
    default:
      return partitions;
  }
}

function combineRankingPartitions(rankingPartitions = initialState.rankingPartitions,
  action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_RANKING_PARTITIONS:
      return action.rankingPartitions;
    default:
      return rankingPartitions;
  }
}

function combineRankingVideos(rankingVideos = initialState.rankingVideos, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_RANKING_VIDEOS:
      return action.rankingVideos;
    default:
      return rankingVideos;
  }
}

function combineVideo(video = initialState.video, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_VIDEO_INFO:
      return action.video;
    default:
      return video;
  }
}

function combineUpUser(upUser = initialState.upUser, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_UP_USER:
      return action.upUser;
    default:
      return upUser;
  }
}

function combineLiveData(liveData = initialState.liveData, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_LIVE_DATA:
      return action.liveData;
    default:
      return liveData;
  }
}

function combineLiveListData(liveListData = initialState.liveListData, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_LIVE_LIST:
      return action.liveListData;
    default:
      return liveListData;
  }
}

function combineRoomData(roomData = initialState.roomData, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SET_ROOM_DATA:
      return action.roomData;
    default:
      return roomData;
  }
}

const reducer = combineReducers({
  shouldLoad: combineShouldLoad,
  oneLevelPartitions: combineOneLevelPartitions,
  banners: combineBanners,
  additionalVideos: combineAdditionalVideos,
  partitions: combinePartitions,
  rankingPartitions: combineRankingPartitions,
  rankingVideos: combineRankingVideos,
  video: combineVideo,
  upUser: combineUpUser,
  liveData: combineLiveData,
  liveListData: combineLiveListData,
  roomData: combineRoomData
});

export default reducer;
