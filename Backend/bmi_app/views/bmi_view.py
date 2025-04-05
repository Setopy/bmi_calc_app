from django.http import JsonResponse
from django.views import View
from ..services.bmi_service import BMIService
from ..domain.requests.bmi_request import BMIRequestObject
from ..domain.responses.bmi_response import BMIResponseObject
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json

@method_decorator(csrf_exempt, name='dispatch')
class BMIView(View):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.bmi_service = BMIService()

    def post(self, request):
        try:
            # Parse JSON data from request
            data = json.loads(request.body.decode('utf-8'))

            # Create request object from JSON data
            bmi_request = BMIRequestObject.from_dict(data)

            # Validate request data
            if not bmi_request.is_valid():
                response = BMIResponseObject.failure("Height and weight must be positive values")
                return JsonResponse(response.to_dict(), status=400)
            
            # Calculate BMI using the service
            bmi = self.bmi_service.calculate_bmi(
                bmi_request.height, 
                bmi_request.weight
            )
            
            # Get BMI category
            category = self.bmi_service.get_bmi_category(bmi)
            
            # Create success response
            response = BMIResponseObject.success(bmi, category)
            
            return JsonResponse(response.to_dict(), status=200)
            
        except json.JSONDecodeError:
            response = BMIResponseObject.failure("Invalid JSON format")
            return JsonResponse(response.to_dict(), status=400)
        except ValueError as e:
            response = BMIResponseObject.failure(str(e))
            return JsonResponse(response.to_dict(), status=400)
        except Exception as e:
            response = BMIResponseObject.failure(f"An unexpected error occurred: {str(e)}")
            return JsonResponse(response.to_dict(), status=500)
