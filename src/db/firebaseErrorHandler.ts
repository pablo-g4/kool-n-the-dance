export const mapAuthCodeToMessage = (error: any) => {
    switch (error.message) {
      case "INVALID_PASSWORD":
        return "Password provided is not corrected";
      case "INVALID_EMAIL":
        return "Email provided is invalid";
      default:
        return "";
    }
}