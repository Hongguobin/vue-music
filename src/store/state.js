import { playMode } from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence, // 表示当前的播放模式
  currentIndex: -1,
  disc: {},
  topList: {},
  favoriteList: []
}
export default state