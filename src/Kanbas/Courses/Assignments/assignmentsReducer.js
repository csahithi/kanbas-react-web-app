import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
const initialState = {
    assignments: [],
    assignment: { title: "New Assignment 123", due: "2023-01-10" },
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                action.payload, 
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
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        resetAssignment: (state) => {
            state.assignment = { title: "New Assignment 123", due: "2023-01-10" };
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
    },
});
export const { addAssignment, deleteAssignment,
updateAssignment, setAssignment, resetAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;