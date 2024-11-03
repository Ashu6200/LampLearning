const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        enrolledCourse: [],
        savedCourse: [],
        savedBlogs: [],
        coursesconversation: []
    },
    reducers: {
        getUser: (state, action) => {
            const { accountId, _id, email, name } = action.payload
            state.user = { accountId, _id, email, name }
        },
        getenrolledCourse: (state, action) => {
            const { courses_enrolled } = action.payload
            state.enrolledCourse = courses_enrolled
        },
        addEnrolledCourse: (state, action) => {
            const { _id } = action.payload
            state.enrolledCourse = state.enrolledCourse.push(_id)
        },
        getsavedCourse: (state, action) => {
            const { courses_saved } = action.payload
            state.savedCourse = courses_saved
        },
        addSavedCourse: (state, action) => {
            const { _id } = action.payload
            state.savedCourse = state.savedCourse.push(_id)
        },
        removeSavedCourse: (state, action) => {
            const { _id } = action.payload
            state.savedCourse = state.savedCourse.filter(s => s !== _id)
        },
        getsavedBlogs: (state, action) => {
            const { blogs_saved } = action.payload
            state.savedBlogs = blogs_saved
        },
        addSavedBlogs: (state, action) => {
            const { _id } = action.payload
            state.savedBlogs = state.savedBlogs.push(_id)
        },
        removeSavedBlogs: (state, action) => {
            const { _id } = action.payload
            state.savedBlogs = state.savedBlogs.filter(s => s !== _id)
        },
        getCoursesconversation: (state, action) => {
            const { courses_conversation } = action.payload
            state.coursesconversation = courses_conversation
        }
    }
})

export const { } = userSlice.actions
export default userSlice.reducer