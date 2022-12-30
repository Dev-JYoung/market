vRP_gMarketS = {}

Tunnel = module("vrp", "lib/Tunnel")
Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP","g-market")
vRP_gMarketC = Tunnel.getInterface("g-market", "g-market")

Tunnel.bindInterface("g-market", vRP_gMarketS)

MySQL = module("vrp_mysql", "MySQL")

function vRP_gMarketS.getPlayerItem()
  local user_id = vRP.getUserId({source})
  local player = vRP.getUserSource({user_id})
  local data = vRP.getUserDataTable(user_id)

  for k,v in pairs(data.inventory) do 
    local name = vRP.getItemName(k)
    print(name)
  end
end