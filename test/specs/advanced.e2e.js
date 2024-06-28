describe("Advanced testing", async () => {
  it("File upload", async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");
    const filePath = "./sample.jpg";
    const remoteFilePath = await browser.uploadFile(filePath);
    await $("#file-upload").setValue(remoteFilePath);
    await $("#file-submit").click();
    await browser.pause(3000);
    const text = await $("#uploaded-files").getText();
    expect(text).toEqual("sample.jpg");
  });
});
