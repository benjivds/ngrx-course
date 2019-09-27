import { Course } from "../model/course";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { CourseActions } from "../courses.action-type";





export interface CourseState extends EntityState<Course> {
  /* entities: { [key: number]: Course },
   ids: number[]*/
}

export const adapter = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded,
    (state, action) => adapter.addAll(action.courses, state))
);

