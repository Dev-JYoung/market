vRP_gMarketC = {}

vRP = Proxy.getInterface("vRP")
vRP_gMarketS = Tunnel.getInterface("g-market", "g-market")

Tunnel.bindInterface("g-market", vRP_gMarketC)
Proxy.addInterface("g-market", vRP_gMarketC)

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