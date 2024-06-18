interface UserType {
    _id: string,
    name: string,
    password: string,
    email: string
}

export type ImageType = {
    _id: string;
    originalname: string;
    caption: string;
    filename: string;
    path: string;
    size: number
    createdAt: Date;
    updatedAt: Date;
};


export type ImageUploadResponseType = {
    message: string,
    success: boolean,
    savedImages: ImageType[]
}