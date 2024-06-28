describe("Advanced testing", async () => {
  it("File upload", async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");
    const filePath = "./sample.jpg";
    await browser.customFileUpload(filePath);
    await browser.pause(3000);
    const text = await $("#uploaded-files").getText();
    expect(text).toEqual("sample.jpg");
  });
});
