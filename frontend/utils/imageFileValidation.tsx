// imageFileValidation.tsx

interface ValidationErrors {
    message: string;
}

export function imageFileValidation(
    formData: FormData
): ValidationErrors | null {
    const files = formData.getAll('images');

    if (!files || files.length === 0) {
        return { message: 'Please select at least one file' };
    }

    const allowedSize = 4 * 1024 * 1024; // 4MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    for (let i = 0; i < files.length; i++) {
        const file = files[i] as File;
        if (!allowedTypes.includes(file.type.toLowerCase())) {
            return { message: `${file.name} is not a valid image type` };
        }

        if (file.size > allowedSize) {
            return { message: `${file.name} is more than 4MB` };
        }
    }

    return null; // No validation errors
}
