import { Card } from "../../Card";
import myImage from '../../../assets/images/industry1.webp';
import { Grid } from "../../Grid";

export const Industrial = () => {
    const industry = {
            title: "Steelworks Manufacturing Hub",
            description: "A modern industrial facility for precision manufacturing",
            image: myImage
        }
    
        const industries = Array(20).fill(industry);
    
        return <div>
            <Grid>
                {industries.map((industry, index) => (
                    <Card key={index} building={industry}></Card>
                ))}
          </Grid>
          </div>
}