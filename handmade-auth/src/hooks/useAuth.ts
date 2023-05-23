import {
  AZURE_AD_B2C_CLIENT_ID,
  AZURE_AD_B2C_CLIENT_SECRET,
  AZURE_AD_B2C_PRIMARY_USER_FLOW,
  AZURE_AD_B2C_TENANT_NAME,
} from "@/config"

const authUrl = `https://${AZURE_AD_B2C_TENANT_NAME}.b2clogin.com/${AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/${AZURE_AD_B2C_PRIMARY_USER_FLOW}/oauth2/v2.0/authorize`;
export const useAuth = () => {
  const clientIdQuery = `client_id=${AZURE_AD_B2C_CLIENT_ID}`
  const scopeQuery = "offline_access openid";
  const url = `${authUrl}?${clientIdQuery}&${scopeQuery}`
  const auth = async () => {
    const authRes = await fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "no-cors",
      },
    });
    console.log(authRes.json())
  }

  return { auth }
};
