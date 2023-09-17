export const remoteImage = async (url: string) => {
  let response = await fetch(url);
  let blob = await response.blob();
  let arrayBuffer = await blob.arrayBuffer();
  let base64String = bufferToBase64(arrayBuffer);
  return "data:" + blob.type + ";base64," + base64String;
};

function bufferToBase64(buffer: ArrayBuffer): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    if (bytes[i] === undefined) break;
    binary += String.fromCharCode(bytes[i] as number);
  }
  return btoa(binary);
}
