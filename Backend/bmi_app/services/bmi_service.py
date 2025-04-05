from .interfaces.bmi_interface import BMIInterface

class BMIService(BMIInterface):
    def calculate_bmi(self, weight: float, height: float) -> float:
        bmi = weight / (height ** 2)
        return round(bmi, 2)

    def get_bmi_category(self, bmi):
        if bmi < 18.5:
            return "Underweight"
        elif bmi < 25:
            return "Normal weight"
        elif bmi < 30:
            return "Overweight"
        else:
            return "Obese"
