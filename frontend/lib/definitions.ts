interface UserType {
    _id: string,
    name: string,
    password: string,
    email: string
}

export type ImageType = {
    _id: string;
    url: string;
    caption: string;
    imageName: string;
};