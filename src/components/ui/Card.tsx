import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ className, children, hover = false }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-md border border-gray-200',
        hover && 'hover:shadow-lg transition-shadow duration-200',
        className
      )}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <div className={cn('p-6 pb-4', className)}>{children}</div>;
};

const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
};

const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <div className={cn('p-6 pt-4 border-t border-gray-200', className)}>{children}</div>;
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;