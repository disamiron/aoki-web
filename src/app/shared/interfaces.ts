export interface UserReview {
  userLogo: string;
  userName: string;
  userPosition: string;
  reviewText: string;
}

export interface GetAccessData {
  name: string;
  email: string;
  message?: string;
}
