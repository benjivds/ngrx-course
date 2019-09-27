import { Course, compareCourses } from "../model/course";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../courses.action-type";





export interface CoursesState extends EntityState<Course> {
  /* entities: { [key: number]: Course },
   ids: number[]*/
  allCoursesLoaded: boolean
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  selectId: course => course.id
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded,
    (state, action) => adapter.addAll(action.courses,
      {
        ...state,
        allCoursesLoaded: true
      }))
);

export const { selectAll } = adapter.getSelectors();

