if Nmsh.Framework.QBCore then
    QBCore = exports['qb-core']:GetCoreObject()

    RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
        Wait(5000)
        OpenUpdateHub()
    end)
end

RegisterCommand("updatehub", function(source, args, rawCommand)
    OpenUpdateHub()
end, false)

function OpenUpdateHub()
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "open"
    })
end

RegisterNUICallback("close", function(data, cb)
    SetNuiFocus(false, false)
    cb("ok")
end)