export const requiredField = value => value ? undefined : "Field is required";

export const maxLengthCreator = maxLength => value => value && value.length <= maxLength ? undefined : `Max length ${maxLength} symbols`;