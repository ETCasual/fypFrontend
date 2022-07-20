import { Wrapper } from '../../components'

const Create = () => {
	return (
		<Wrapper>
			<div className="create section__padding">
				<div className="create-container">
					<h1>Create new Item</h1>
					<p className="upload-file">Upload File</p>
					<div className="upload-img-show">
						<h3>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</h3>
						<img src={'/assets/Image.png'} alt="banner" />
						<p>Drag and Drop File</p>
					</div>
					<form className="writeForm" autoComplete="off">
						<div className="formGroup">
							<label>Upload</label>
							<input type="file" className="custom-file-input" />
						</div>
						<div className="formGroup">
							<label>Name</label>
							<input
								type="text"
								placeholder="Item Name"
								autoFocus={true}
							/>
						</div>
						<div className="formGroup">
							<label>Description</label>
							<textarea
								rows={4}
								placeholder="Decription of your item"
							></textarea>
						</div>
						<div className="formGroup">
							<label>Price</label>
							<div className="twoForm">
								<input type="text" placeholder="Price" />
								<select>
									<option value="ETH">ETH</option>
									<option value="BTC">BTC</option>
									<option value="LTC">LTC</option>
								</select>
							</div>
						</div>
						<div className="formGroup">
							<label>Category</label>
							<select>
								<option>Art</option>
								<option>Photography</option>
								<option>Sports</option>
								<option>Collectibles</option>
								<option>Trading Cards</option>
								<option>Utility</option>
							</select>
						</div>
						<div className="formGroup">
							<label>Available Items</label>
							<input type="text" placeholder="No of Items" />
						</div>
						<button className="writeButton">Create Item</button>
					</form>
				</div>
			</div>
		</Wrapper>
	)
}

export default Create