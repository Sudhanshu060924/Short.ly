

from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.url import URL
from app.repo.url_repo import get_by_short_code, get_original_url, save_url, update_url
from app.schemas.url_schema import URLCreate
from app.utils.generator import generate_short_code

def create_short_url(
    url_data: URLCreate,
    db: Session
):
    short_code = generate_short_code()

    # Keep generating until we get a unique code
    while get_by_short_code(db, short_code):
        short_code = generate_short_code()

    new_url = URL(
        original_url=str(url_data.url),
        short_code=short_code
    )

    return save_url(db, new_url)

def get_url(short_code: str, db: Session):

    url = get_original_url(db, short_code)

    if not url:
        raise HTTPException(
            status_code=404,
            detail="Short URL not found"
        )

    url.clicks += 1

    update_url(db, url)

    return url