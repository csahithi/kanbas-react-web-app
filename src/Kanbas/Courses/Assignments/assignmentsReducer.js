import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
const initialState = {
    assignments: db.assignments,
    assignment: { title: "New Assignment 123", due: "2023-01-10" },
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            const { assignment, courseId } = action.payload;
            state.assignments = [
                { ...assignment, _id: new Date().getTime().toString(), course: courseId },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        resetAssignment: (state) => {
            state.assignment = { title: "New Assignment 123", due: "2023-01-10" };
        }
    },
});
export const { addAssignment, deleteAssignment,
updateAssignment, selectAssignment, resetAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;