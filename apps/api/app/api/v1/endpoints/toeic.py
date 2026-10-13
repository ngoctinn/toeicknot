from fastapi import APIRouter

from app.schemas.toeic import ToeicPart

router = APIRouter()


@router.get("/parts", response_model=list[ToeicPart])
def get_toeic_parts():
    return [
        {
            "part": 1,
            "name": "Photographs",
            "description": "Listen and identify picture descriptions",
            "questions_count": 6,
        },
        {
            "part": 2,
            "name": "Question-Response",
            "description": "Listen and choose appropriate response",
            "questions_count": 25,
        },
        {
            "part": 3,
            "name": "Conversations",
            "description": "Listen to short conversations",
            "questions_count": 39,
        },
        {
            "part": 4,
            "name": "Short Talks",
            "description": "Listen to talks and lectures",
            "questions_count": 30,
        },
        {
            "part": 5,
            "name": "Incomplete Sentences",
            "description": "Grammar and vocabulary gap-fill",
            "questions_count": 30,
        },
        {
            "part": 6,
            "name": "Text Completion",
            "description": "Reading gap-fill in short passages",
            "questions_count": 16,
        },
        {
            "part": 7,
            "name": "Reading Comprehension",
            "description": "Single and multiple passage comprehension",
            "questions_count": 54,
        },
    ]
