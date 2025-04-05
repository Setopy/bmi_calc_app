from dataclasses import dataclass
from typing import Optional, Dict, Any

@dataclass
class BMIRequestObject:
    """Request object for BMI calculation"""
    height: float
    weight: float
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> 'BMIRequestObject':
        """Create a BMI request object from a dictionary"""
        try:
            height = float(data.get('height', 0))
            weight = float(data.get('weight', 0))
            
            return cls(height=height, weight=weight)
        except (ValueError, TypeError):
            raise ValueError("Invalid height or weight values")
    
    def is_valid(self) -> bool:
        """Validate the request data"""
        return self.height > 0 and self.weight > 0