from dataclasses import dataclass
from typing import Optional, Dict, Any

@dataclass
class BMIResponseObject:
    """Response object for BMI calculation results"""
    bmi: float
    category: str
    success: bool = True
    error_message: Optional[str] = None
    
    @classmethod
    def success(cls, bmi: float, category: str) -> 'BMIResponseObject':
        """Create a successful response with BMI results"""
        return cls(bmi=bmi, category=category, success=True)
    
    @classmethod
    def failure(cls, error_message: str) -> 'BMIResponseObject':
        """Create a failure response with an error message"""
        return cls(bmi=0, category="", success=False, error_message=error_message)
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert response object to a dictionary for template rendering"""
        return {
            'bmi': self.bmi,
            'category': self.category,
            'success': self.success,
            'error_message': self.error_message
        }