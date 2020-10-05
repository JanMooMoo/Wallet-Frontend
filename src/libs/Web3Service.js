import Snowflake from '../Snowflake.json';
// import Snowflake from '../contracts/Snowflake.json';
import Web3 from 'web3';
import Contract from 'web3-eth-contract';

const providerURL = "https://rinkeby.infura.io/v3/75cc8cba22ab40b9bfa7406ae9b69a27";
const contractAddress = "0x47aC2F343926868e892Ba53a9D09e98bf6124460";
//const contractAddress = "0x28E84CAFb98b3dc8F05C97203EB36D117de74899";
// const contractAddress = "0xE5B89D64B7e69661fD38f4655bC2a5a766796DA5";

class Web3Service {
    web3 = "";
    async initContract() {
        this.web3 = await new Web3(new Web3.providers.HttpProvider(providerURL));
    }

    async createContract() {
        const contract = await new this.web3.eth.Contract(Snowflake.abi, contractAddress)
        return contract;
    }

}


const w3s = new Web3Service()
export default w3s;