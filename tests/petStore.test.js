import { placeOrder, petAdd, statusPet, petID, inventoryMap, CreateWithList, userName, userRefresh, userLogin} from "../framework/services/controllers";
import { configPetStatus, configPetID, configUserName, configUserLogin } from "../framework/config/config";
describe ("Pet Store tests", () => {

    it ("Place order", async () => {

        const responsePlaceOrder = await placeOrder();
        expect(responsePlaceOrder.status).toBe(200)
        console.log(responsePlaceOrder.data)
        expect(responsePlaceOrder.data).toMatchObject({
                "id": expect.any(Number),
                "petId": expect.any(Number),
                "quantity": expect.any(Number), 
                "shipDate": expect.any(String),
                "status": expect.any(String),
                "complete": true
        })
    })

    it ("Add to Pet store", async () => {
        const responsePetAdd = await petAdd();
        expect(responsePetAdd.status).toBe(200);
        expect(responsePetAdd.data).toMatchObject({
            id: expect.any(Number),
            category: expect.any(Object),
            name: expect.any(String),
            photoUrls: expect.any(Array),
            "tags": expect.any(Array),
            status: expect.any(String)
        })
    })

    it ("Pet Status", async () => {
        const responsePetStatus = await statusPet(configPetStatus); 
        expect(responsePetStatus.status).toBe(200);
        console.log(responsePetStatus.data)
       
    })

    it ('Pet ID', async () => {
        const responsePetID = await petID(configPetID);
        expect(responsePetID.status).toBe(200)
        console.log(responsePetID.data)
    })

    it ('Inventory', async () => {
        const responseInventoryMap = await inventoryMap();
        expect(responseInventoryMap.status).toBe(200) 
        console.log(responseInventoryMap.data)
    })

    it ('Create With List', async () => {
        const responseCreateWithList = await CreateWithList();
        expect(responseCreateWithList.status).toBe(200)
        
    })

    it ('User name', async () => {
        const responseUserName = await userName(configUserName);
        expect(responseUserName.status).toBe(200);
        console.log(responseUserName.data)

    })

    it ('User Refresh', async () => {
        const responseUserRefresh = await userRefresh(configUserName);
        expect(responseUserRefresh.status).toBe(200)
        console.log(responseUserRefresh.data)
    })

    it ('User Login', async () => {
        const responseUserLogin = await userLogin(configUserLogin);
        expect(responseUserLogin.status).toBe(200)
        console.log(responseUserLogin.data)
    })
})