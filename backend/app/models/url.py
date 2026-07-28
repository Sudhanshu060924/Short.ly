from datetime import UTC, datetime

from sqlalchemy import (
    String,
    Integer,
    DateTime
)

from sqlalchemy.orm import Mapped, mapped_column

from app.db.database import Base

class URL(Base):
    __tablename__="urls"
    id:Mapped[int] = mapped_column(
        primary_key=True
    )
    original_url: Mapped[str] = mapped_column(
    String,
    nullable=False
    )
    short_code: Mapped[str] = mapped_column(
        String(10),
        unique=True,
        nullable=False
    )  
    clicks: Mapped[int] = mapped_column(
    Integer,
    default=0
    )
    created_at: Mapped[datetime] = mapped_column(
    DateTime,
    default=datetime.now(UTC)
    )  
    expires_at: Mapped[datetime | None] = mapped_column(
    DateTime,
    nullable=True
    )