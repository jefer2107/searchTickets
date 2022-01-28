var https = require('https');
var fs = require('fs');

var qs = require('query-string');

var options = {
  'method': 'POST',
  'hostname': 'viajemais.voeazul.com.br',
  'path': '/Search.aspx',
  'headers': {
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'Upgrade-Insecure-Requests': '1',
    'Origin': 'https://viajemais.voeazul.com.br',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Mobile Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    'Referer': 'https://viajemais.voeazul.com.br/Availability.aspx',
    'Accept-Language': 'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es-AR;q=0.6,es;q=0.5',
    'Cookie': 's_fid=120F3317B9DCAC5A-0798D292D8A5F9A7; ga=GA1.3.1181126359.1643025920; lmd_orig=organic; _gcl_au=1.1.1688445745.1643025920; _hjid=d971ccdb-82f7-4e6e-ab0b-ec3c81d1e120; _up=1.2.898517733.1643025921; _hjSessionUser_606836=eyJpZCI6IjAYqLVR2jqojevDBgbFFiKiamWQT49cQvsBPH9vdgiMkNE1VDnM8ByZWF0ZWQiOjE2NDMwMjU5MjEyNTEsImV4aXN0aW5nIjp0cnVlfQ==; _fbp=fb.2.1643025921966.932955220; sback_client=57dad183becd8a522620c05b; sback_customer=$2AYqLVR2jqojevDBgbFFiKiamWQXsLHZtR4B7kF7AUy4T51vdgiMkNE1VDnMy7Rk90NwUXUsRleOdGe1kkSHp1T2$12; sback_partner=false; sb_days=1643025923770; lmd_traf=organic-1643025920124&organic-1643025920907&organic-1643025962608&organic-1643025964205; _gid=GA1.3.2140446319.1643143885; ASP.NET_SessionId=k4lqudqn2brgtxwkwv10sakj; ad_gdpr=0; rxVisitor=16432005025350QQJ3AOCARBOKFNKFA1BD5AOLPQGFNDQ; cont=0; cro_test=true; siteLang=pt; prflTudoAzul=saldo; au_vtid=120F3317B9DCAC5A-0798D292D8A5F9A7_1643200506894; s_cc=true; _clck=b6b42b|1|eyg|0; sback_customer_w=true; isInternational=false; _funilid=fluxo-compra; order_filter_option=N%C3%A3o%20selecionado; _stLang=pt; skysales=306374410.20480.0000; CONSENTMGR=ts:1643201831184%7Cconsent:true; _cm_ads_activation_retry=false; _spl_pv=1; dtCookie=v_4_srv_5_sn_CF6CC50B043A2F64498F5DEF48CE9831_app-3Ad748d36491f1b858_1_app-3Aea7c4b59f27d43eb_1_ol_0_perc_100000_mul_1; sback_customer=$2wNygWRwoWbaBHeXFVcUxmTylXSNl0V55UUqhjUF1GYARDuAM2zSiYYpXLhf9vCPVSTnZmqnzWRGfWCMvPrEVzT2$12; _spl_pv=2; ak_bmsc=B4DA0451E1EFDE22EDD5DEF164ABBED7~000000000000000000000000000000~YAAQRw8tFzWGBHJ+AYqLVR2jqojevDBgbFFiKiamWQXsLHZtR4B7kF7AUy4T51vdgiMkNE1VDnMy7MvPrE5OGN0vFJ2d7LWm6CQW7mtKYQg/FmEjjEA1u0fejtcnn/W9JE/ns9jIolETPDegserbheN0CQGWeA60LVR2jqojevDBgbFFiKiamWQXsLHZtR4B7kF7AUy4T51vdgiMkNE1VDnM7OHwKqp/GYARDuAM2zSiYYpXLhf9vCPVSTYR2HupL1SyUXqGcpzeDy9N11HMAHex5eH+i+HCnYUtUKuh7fAl2Rc4J3CAPttskVrhQPsQW/Fly52GXkWCGDHo13l+4sZPUSCPb3sed96jylODJ+BhXra+LQpVDD3+KPdoGYARDuAM2zSiYYpXLhf9vCPVSTYR2HupL1SyUXqGcpzeDy9N11HMAHex5eH02xoVpL5U=; bm_sv=70BFA4924F8A81A5765A2C2C0A0751F2~C0/c7Zv3RUuVlA+SH/Bft6nSTNZwE5Ia5mf/56//8Pa8sdOeOOi2j1pamKc6t33BMAK8N+bkZjVrfUeX98VnAgGyuvHqVqgUUSKk1zTb6cEKdy0NQ5miecE2BLQXDOjbW1j5J+w6GwkUvfOVhAX+wBhsM5aNRofPHuS0lFV+IUA=; sback_browser=0-26439600-1GYARDuAM2zSiYYpXLhf9vCPVSTnZmqnzWRGfWCMvPrEcfa0f5132296227761f19ed9408d90-83852760-19118513191,13017640154-1643224793; sback_access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3JfBKNCEz1DWRuJwHM6X1ZjdJ4RWCMvPrE6MTY0MzIyNDc5NCwiZXhwIjoxNjQzMzExMTk0LVR2jqojevDBgbFFiKiamWQT49cQvsBPH950X2lkIjoiAYqLVR2jqojevDBgbFFiKiamWQT49cQvsBPH94BbUTE0X2RvbWFpbiI6InZvZWF6dWwuY29t1MrxfTYR2HupL1SyUXqGcpzeDy9N11HMAHex5eH0b21lcl9hbm9ueW1vdXMSTYR2HupL1SyUXqGcpzeDy9N11HMAHex5eH0AYqLnTTThKqhV4npsciGstSpAa1XdkrrBPE0b21lciJ9fQ.RVn4VxGgvKvbifuMMk7imKEyTl0uC75n2PzNBUPyWiA.WrWruyzRKqgPgPzREiHezR; _prevPage=availability; dtSa=-; mbox=check#true#1643231699|session#cbfcabb7576d4ccea6e3f1a3190227e8#1643233499; _searchid=1643231641151225620; _uetsid=8ff18a207e2011ecb31e7db8d06a5517; _uetvid=1ec375b0180b11ec921ed7012db61ff1; _clsk=15m45da|1643231642892|3|1|f.clarity.ms/collect; cto_bundle=nMSTYR2HupL1SyUXqGcpzeDy9N11HMAHex5eH0V3JfBKARDuAM2zSiYYpXLhf9vCPVSTYR2HupL1SyUXqGcpzeDy9N11HMAHex5eH0QlM0Q; _hjIncludedInSessionSample=0; _hjSession_606836=eyJpZCI6IjIxNmY4ZGYARDuAM2zSiYYpXLhf9vCPVSTYR2HupL1SyUXqGcpzeDy9N11HMAHex5eH0=; _hjAbsoluteSessionInProgress=1; _st_ses=003795231316841452; sback_refresh_wp=no; _sptid=1434; _spcid=1455; _st_cart_script=helper_voeazul.js; _st_cart_url=/; _st_no_user=1; sback_current_session=1; sback_total_sessions=6; _gat_tealium_0=1; originDestination_searched=Belo%20Horizonte%20-%20Confins%20%28CNF%29_S%E3o%20Paulo%20-%20Congonhas%20%28CGH%29; utag_main=v_id:017e8bf987d6004802020b1052240507200a906a0086e$_sn:5$_ss:0$_st:1643233476243$dc_visit:5$_ga:017e8bf987d6004802020b1052240507200a906a0086e$vapi_domain:voeazul.com.br$ses_id:1643231600351%3Bexp-session$_pn:2%3Bexp-session$dc_event:1%3Bexp-session$dc_region:us-east-1%3Bexp-session; s_sq=azul-novo-prod%3D%2526c.%2526a.%2526activitymap.%2526page%253Davailability%2526link%253DBuscar%252520passagens%2526region%253DTCSStabbox-shopping%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Davailability%2526pidt%253D1%2526oid%253DBuscar%252520passagens%2526oidt%253D3%2526ot%253DSUBMIT; _gali=TCSS_tabbox-shopping; rxvt=1643233476643|1643229877223; dtPC=5$431638446_134h-vKFAJFUAPWUWFPAWKMOFDFARRAKMUFAPO-0e0; dtLatC=1'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = qs.stringify({
  'ControlGroupSearch$SearchMainSearchView$RadioButtonMarketStructure': 'OneWay',
  'origin1': /*'Belo+Horizonte+-+Confins+(CNF)'*/'CNF',
  'ControlGroupSearch$SearchMainSearchView$TextBoxMarketOrigin1': /*'Belo+Horizonte+-+Confins+(CNF)'*/'CNF',
  //'ControlGroupSearch$SearchMainSearchView$CheckBoxUseMacOrigin1': '',
  'hdfSearchCodeDeparture1': '1N',
  'originIata1': 'CNF',
  //'locationOrigin1': '{"code":"CNF","name":"Belo+Horizonte+-+Confins","isMacCode":"Nao","searchCode":"1N","highlight":true,"isInternational":false,"fullName":"Belo+Horizonte+-+Confins+(CNF)"}',
  //'authkey': '106352422A4DEB0810953636A6FBE2079955529786098DE8B0D32416202E380E34C245FA99C431C7C7A75560FDE65150',
  //'_EVENTTARGET': 'ControlGroupSearch$LinkButtonSubmit',
  //'ControlGroupSearch$SearchMainSearchView$DropDownListSearchBy': 'columnView',
  //'ControlGroupSearch$SearchMainSearchView$TextBoxPromoCode': 'CALLCENT',
  //'promocode': '',
  //'orgcode': '',
  'destination1': /*'São+Paulo+-+Congonhas+(CGH)'*/'CGH',
  'ControlGroupSearch$SearchMainSearchView$TextBoxMarketDestination1':/* 'São+Paulo+-+Congonhas+(CGH)'*/'CGH',
  //'ControlGroupSearch$SearchMainSearchView$CheckBoxUseMacDestination1': '',
  'hdfSearchCodeArrival1': '1N',
  'destinationIata1': 'CGH',
  //'locationDestination1': '{"code":"CGH","name":"São+Paulo+-+Congonhas","isMacCode":"Nao","searchCode":"1N","highlight":false,"isInternational":false,"fullName":"São+Paulo+-+Congonhas+(CGH)"}',
  'departure1': '28/01/2022',
  'ControlGroupSearch$SearchMainSearchView$DropDownListMarketDay1': '28',
  'ControlGroupSearch$SearchMainSearchView$DropDownListMarketMonth1': '2022-01',
  'ControlGroupSearch$SearchMainSearchView$DropDownListPassengerType_ADT': '1',
  'ControlGroupSearch$SearchMainSearchView$DropDownListPassengerType_CHD': '0',
  'ControlGroupSearch$SearchMainSearchView$DropDownListPassengerType_INFANT': '0',
  //'ControlGroupSearch$SearchMainSearchView$DropDownListFareTypes': 'R',
});

req.write(postData);

req.end();