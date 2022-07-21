import styles from "../styles/YourNft.module.css"
import { useMoralis } from "react-moralis"
import { NFTBalance } from "@web3uikit/web3"
import { Header } from "../components/Header"

export default function YourNft() {
	const { chainId, account, isWeb3Enabled } = useMoralis()
	const address = account
	// const chainString = parseInt(chainId).toString()
	const chainString = "0x61"
	return (
		<div>
			<Header />
			<h1>Your NFTs</h1>
			<div>
				{isWeb3Enabled ? (
					<NFTBalance address={address} chain={chainString} />
				) : (
					<div>Web3 Currently Not Enabled</div>
				)}
			</div>
		</div>
	)
}
