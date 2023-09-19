interface AppConfig {
  member: {
    name: string
    handle: string
    bio: string
    profilePicture: {
      src: URL
    }
  }
}

export const appConfig: AppConfig = {
  member: {
    name: "ShanghaiSix",
    handle: "@shanghaisix",
    bio: "CEO for military charity Stack Up!",
    profilePicture: {
      src: new URL(
        "https://static-cdn.jtvnw.net/jtv_user_pictures/a72e828f-fd9d-4895-a8f7-9e7e366138c3-profile_image-70x70.png"
      ),
    },
  },
}
