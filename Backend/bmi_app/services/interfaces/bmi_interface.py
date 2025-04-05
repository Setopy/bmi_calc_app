from abc import ABC, abstractmethod

class BMIInterface(ABC):
    @abstractmethod
    def calculate_bmi(self, weight: float, height_cm: float) -> float:
        pass
