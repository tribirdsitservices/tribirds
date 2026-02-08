import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* Contact form state */
interface ContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
};

/* Simulate async form submission */
export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (formData: Record<string, string>, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Simulate success
      return { message: "Form submitted successfully", data: formData };
    } catch {
      return rejectWithValue("Failed to submit form. Please try again.");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
