from fastapi import APIRouter, Depends
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.url_schema import URLCreate, URLResponse
from app.services.url_services import create_short_url, get_url

router = APIRouter(
    
    tags=["URLs"]
)

@router.post("/shorten",response_model=URLResponse)
def shorten(url:URLCreate,db:Session=Depends(get_db)):
    return create_short_url(url,db)

@router.get("/{short_code}")
def redirect_to_original(
    short_code: str,
    db: Session = Depends(get_db)
):
    url = get_url(short_code, db)

    return RedirectResponse(
        url=url.original_url
    )