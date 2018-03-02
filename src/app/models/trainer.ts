export class Trainer {
    id: number;
    url: string;
    firstName: string;
    lastName: string;
    email: string | null;
    profilePictureUrl: string | null;

    Trainer(id: number, url: string, firstname: string, lastname: string, email: string, profilePictureUrl: string) {
        this.id = id;
        this.url = url;
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.profilePictureUrl = profilePictureUrl;
    }
}
