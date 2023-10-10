
const express = require('express');
const noblox = require('noblox.js');

module.exports = async (req, res) => {
  const { name = 'Ayoub' } = req.query;

  try {

    const cookie = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_F490A00ACBD5DE8C8E51315DB14AE1D54E31FBA8C8D228E3CCC85B9438D64C415D445A026925960DA010361AFE000C0BA052BD0A970044F61F3AD634ABC49DAB8050F8806DB2E14EDAD1D9AA9897401BA61F99F5DC3628FF0A7CBE02A3FDBECFC40441532EB721A2525BAAAF8B0A1C117726BF0026E2C0344E80C3A819A1011BE3331FA7B4216952F5B919E777EA3162C1223E580A7FE14F3A5201EE499C20298AF877B7AAB3B1F54BB1EC43BC8DBC30CC8542D17A940A229EFA78955CE038C2C303D19B53905CA25B3E93E3E91FC558FA4495FF4629C45AFC99E0059548EF379E249C32645C4F2A995FD4F6D7EEE42ADB92BA6391562D76712BE15699787351BD15490717BC247AF50E7E7A4D5C59DF9822F386063EB9D9AF96E6CC4FC8EEFAFCCDDB8F8A9B4765EB744704670C7CDB1B85F1975687450BD6E4B98238DE3DAB4FF474BFE0F7BB6595021A3BF056E42B9E7E45AAFA645BC17FA4B32951253D995F4BBD5EB6636DBA0A9D49A9F549560B1C61326AE01B8AFE865E212ABB698867D2376B72FDCB7B23D68E7C86B8AD5587763C3DF64F23FF553A83A4E05713C34D187E73B6472E61262ADFD627BB3B6FFE0486211E7B5D17EE6A1AC76078E5D07D557344AAC1725D56B2DE2D21EC74A98C2EA346FDCA5EAB18DAB863A2E42EBE5F7EB79E55D6E398868179DBADE3F6F784B89CFC42E2A3008294B969E56251E396FCD466AD87750E7DF4F977966336231B1F8302EFCD8E8EB208B31A592239E4B540414B1600DD226E55350ACED2E2434112B9A8D3E88AC63B242114B11FD820948482355B31B1E1B0C3427E4FF1889E1A8711E5352A0BD9AFD7FE33D0674D7FA1F6D281BF72EF647CC155A940602D5F2C0758026A2E3CE882BFC21CB67C2AF0FA459825034B510B30FF90C163D823248DCE57E090C773F410B6E89544CA0B09405DCD75213EE90567598AE2A1EF0376F831120DA44BE94AF986AC77DEA9BA909B3BD1E230C65CE234280F2AFC6A96E6DC66A4E082AFA27BA1924E238B1C5FF8631F46E0BA'

    // Set the cookie and wait for it to complete
    await noblox.setCookie(cookie);

    // Fetch the XCSRF token and wait for it to complete
    const XCSRF = await noblox.getGeneralToken();

    return res.json({
      XCSRFToken: XCSRF,
      message: "Found csrf token",
      success: true
    });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).json({
      message: "csrf token not found",
      error: 'An error occurred',
      success: false
    });
  }
};
