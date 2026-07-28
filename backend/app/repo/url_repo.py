from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.url import URL




def save_url(
    db: Session,
    url: URL
):
    db.add(url)

    db.commit()

    db.refresh(url)

    return url


def get_by_short_code(db: Session, short_code: str):
    stmt = select(URL).where(URL.short_code == short_code)
    result = db.execute(stmt)
    return result.scalar_one_or_none()



def get_original_url(db: Session, short_code: str):
    stmt = select(URL).where(URL.short_code == short_code)
    result = db.execute(stmt)
    return result.scalar_one_or_none()

def update_url(db: Session, url: URL):
    db.commit()
    db.refresh(url)
    return url