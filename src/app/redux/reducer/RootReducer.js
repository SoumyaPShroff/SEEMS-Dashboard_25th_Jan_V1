import { combineReducers } from 'redux';

import LibraryInfoReducer from './LibraryInfoReducer/Index';
import PassiveProjectsReducer from './PassiveProjectsReducer/Index';
import RightPaneReducer from './RightPaneReducer/Index';

const RootReducer = combineReducers({
  libraryInfoData: LibraryInfoReducer,
  passiveProjectsData: PassiveProjectsReducer,
  RightPaneReducerData: RightPaneReducer,
});

export default RootReducer;
