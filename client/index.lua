vRP_gMarketC = {}

vRP = Proxy.getInterface("vRP")
vRP_gMarketS = Tunnel.getInterface("g-market", "g-market")

Tunnel.bindInterface("g-market", vRP_gMarketC)
Proxy.addInterface("g-market", vRP_gMarketC)

Citizen.CreateThread(function()
  while true do
    vRP_gMarketS.getPlayerItem()
    Citizen.Wait(10000);
  end
end)

Citizen.CreateThread(function ()
  Citizen.Wait(0)
  while true do
    if IsControlJustPressed(0, 288) then
      TransitionToBlurred(2000)
      SetNuiFocus(true, true)
      SendNUIMessage(json.encode({
        type = 'UPDATE',
        data = {
          visible = true
        }
      }));
    end
    Citizen.Wait(0)
  end
end)

RegisterNetEvent('g-market:AddPlayerItem')
AddEventHandler('g-market:AddPlayerItem', function(name)
  SendNUIMessage(json.encode({
    type = 'ADD_ITEM_LIST',
    data = name,
  }))
  -- print("Item Name " + data.item_name)
end)

RegisterNUICallback('close', function(data, cb)
	TransitionFromBlurred(2000)
	SetNuiFocus(false, false)
	cb(true)
end)