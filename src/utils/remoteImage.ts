export const remoteImage = async (url: string) => {
  const response = await fetch(url)
  const blob = await response.blob()
  const arrayBuffer = await blob.arrayBuffer()
  const base64String = bufferToBase64(arrayBuffer)
  return 'data:' + blob.type + ';base64,' + base64String
}

function bufferToBase64 (buffer: ArrayBuffer): string {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.byteLength; i++) {
    if (bytes[i] === undefined) break
    binary += String.fromCharCode(bytes[i] as number)
  }
  return btoa(binary)
}
