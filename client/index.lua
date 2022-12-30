vRP_gMarketC = {}

vRP = Proxy.getInterface("vRP")
vRP_gMarketS = Tunnel.getInterface("g-market", "g-market")

Tunnel.bindInterface("g-market", vRP_gMarketC)
Proxy.addInterface("g-market", vRP_gMarketC)

Citizen.CreateThread(function ()
  Citizen.Wait(0)
  while true do
    if IsControlJustPressed(0, 288) then
      -- Input
      TransitionToBlurred(2000)
      SetNuiFocus(true, true)
      SendNuiMessage(json.encode({
        type = 'UPDATE',
        data = {
          visible = true
        }
      }));
    end
    Citizen.Wait(0)
  end
end)

RegisterNUICallback('open', function(data, cb)
	TransitionFromBlurred(2000)
	SetNuiFocus(true, true)
	cb(true)
end)

RegisterNUICallback('close', function(data, cb)
	TransitionFromBlurred(2000)
	SetNuiFocus(false, false)
	cb(true)
end)