interface AppConfig {
  member: {
    name: string
    handle: string
    profilePicture: {
      src: URL | string
    }
  }
}

export const appConfig: AppConfig = {
  member: {
    name: 'ShanghaiSix',
    handle: 'StackUp_ShanghaiSix',
    profilePicture: {
      // src: "~/images/StackUpLogo.webp",
      src: new URL(
        'https://static-cdn.jtvnw.net/jtv_user_pictures/a72e828f-fd9d-4895-a8f7-9e7e366138c3-profile_image-70x70.png'
      )
    }
  }
}
