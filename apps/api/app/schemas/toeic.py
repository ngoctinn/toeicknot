from pydantic import BaseModel


class ToeicPart(BaseModel):
    part: int
    name: str
    description: str
    questions_count: int
