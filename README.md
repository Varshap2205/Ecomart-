# Ecomart - Making Sustainable Shopping Simple
## 🌿 About Ecomart

<img width="155" alt="Icon" src="https://github.com/user-attachments/assets/c7ff7e6e-7f64-4d5f-ac54-f8b148e7a904" align="right" />


	
**Ecomart** is a Chrome extension that revolutionizes online shopping by providing real-time sustainability insights. When browsing products on major e-commerce platforms like Amazon, our extension analyzes product sustainability and suggests eco-friendly alternatives, making it easier than ever to shop responsibly.

<br />

## ✨ Key Features

- 🔍 **Real-Time Analysis**: Instant sustainability insights while you shop
- 🌱 **Eco Alternatives**: Curated suggestions from verified sustainable brands
- 📊 **Sustainability Score**: Comprehensive rating based on multiple environmental factors
- ♻️ **Impact Tracking**: Monitor your environmental impact over time

---


## 🌍 Key Parameters for Sustainability Score

The sustainability score is calculated using weighted parameters that consider the environmental impact of each product. These parameters are:

1. **🌱 Overall Sustainability Score**: Quick summary rating (0-100%) for decision-making.
2. **🌍 Carbon Footprint**: CO₂ emissions during production.
3. **🚰 Water Usage**: Liters of water consumed for production.
4. **🏭 Manufacturing Impact**: Pollution, deforestation, or waste generated.
5. **🔄 Recyclability**: Percentage of product that can be recycled.
6. **✅ Eco Certifications**: Fair Trade, FSC, Energy Star, etc.
7. **🛢️ Harmful Chemicals Used**: Toxic materials like microplastics and heavy metals.
8. **🌾 Material Composition**: Organic, recycled, synthetic materials used.
9. **🔥 Biodegradability**: Time taken to decompose.
10. **✈️ Shipping Impact**: Distance traveled & CO₂ emissions from transportation.

### Example Calculation for a Product

For example, a product like an **Eco-friendly Bluetooth Speaker** will have a sustainability score calculated based on the weighted sum of individual scores for each parameter.



## 📊 Sustainability Metrics

We have conducted extensive research and developed a **comprehensive scoring system** to evaluate products across key environmental factors. Each metric is assigned a specific weight based on its impact, helping users make more eco-conscious purchasing decisions.

| Metric| Description| Weight |
|-----|---------|------|
| Carbon Footprint| CO₂ emissions during production       | 20%     |
| Eco Certifications| Verified eco-credentials              | 20%    |
| Energy Efficiency| Energy consumption during lifecycle   | 15%    |
| Recyclability| Potential for recycling               | 15%    |
| Water Usage| Production water consumption          | 10%    |
| Biodegradability| Breakdown without harming the environment | 20% |
| Toxic Materials| Presence of harmful substances        | 20%    |
| Lifespan| Product durability                    | 10%    |
| Repairability| Ease of repair and maintenance        | 10%    |
| Packaging Waste| Amount of waste generated from packaging | 10% |
| Transport Distance| Shipping distance impact              | 10%    |
| Resource Efficiency| Efficient use of resources            | 10% |
| Chemical Use| Harmful chemicals during production   | 10%    |
| Renewable Content| Use of renewable materials            | 30%    |
| Working Conditions| Ethical treatment of workers          | 10%    |
| VOC Emissions| Volatile organic compounds emissions  | 10%    |

---

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alfiyafatima09/EcoMart.git
   cd EcoMart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```
   > After running this, an  <u>out</u>  directory will be created in the project’s root directory containing the build files.

4. Load in Chrome:
	  - Open Chrome and go to `chrome://extensions`
	  - Enable `"Developer mode"`
	  - Click `"Load unpacked"`
	  - Select the project's `out` directory
	  - Try it out on E-commerce 

---

### Running the Website

```bash
npm run dev
```
Visit `http://localhost:3000`

## 🌍 How It Works

1. **Product Detection**: Automatically identifies products while shopping
2. **Data Analysis**: Processes product information through our sustainability algorithm
3. **Score Generation**: Creates a comprehensive eco-score
4. **Alternative Suggestions**: Presents sustainable alternatives from verified brands

---

## 🤝 For Eco-Friendly Brands

Join our platform to showcase your sustainable products:

### Requirements:
- Valid sustainability certifications
- Transparent supply chain documentation
- Verified eco-friendly practices

[Apply to Register Your Brand →](https://ecomart-dusky.vercel.app)

---

## 🛠️ Technology Stack

- **Frontend**: Chrome Extension (Next.js, JavaScript)
- **Backend**: Firebase
- **AI Integration**: Gemini API
---

## 📈 Impact Dashboard

Track your sustainable shopping impact:
- 🌱 Products switched to eco-friendly alternatives
- 💧 Water saved through conscious choices
- 🌡️ Carbon emissions reduced

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<p align="center">
Made with 💚 for a <strong>sustainable</strong> future
</p>
