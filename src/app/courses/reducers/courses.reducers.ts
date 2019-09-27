import { Course } from "../model/course";


export interface CourseStae {
  entities: { [key: number]: Course }
}
