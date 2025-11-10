export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      accounts: {
        Row: {
          allocation_percentage: number | null
          archived_at: string | null
          balance: number
          company_id: string
          created_at: string
          id: string
          is_archived: boolean
          is_profit_first: boolean | null
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          allocation_percentage?: number | null
          archived_at?: string | null
          balance?: number
          company_id: string
          created_at?: string
          id?: string
          is_archived?: boolean
          is_profit_first?: boolean | null
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          allocation_percentage?: number | null
          archived_at?: string | null
          balance?: number
          company_id?: string
          created_at?: string
          id?: string
          is_archived?: boolean
          is_profit_first?: boolean | null
          name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      accounts_map: {
        Row: {
          account_type: string | null
          bank_name: string | null
          code: string
          created_at: string | null
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          account_type?: string | null
          bank_name?: string | null
          code: string
          created_at?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          account_type?: string | null
          bank_name?: string | null
          code?: string
          created_at?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      activity_logs: {
        Row: {
          action: string
          company_id: string | null
          created_at: string
          details: Json | null
          id: string
        }
        Insert: {
          action: string
          company_id?: string | null
          created_at?: string
          details?: Json | null
          id?: string
        }
        Update: {
          action?: string
          company_id?: string | null
          created_at?: string
          details?: Json | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_logs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      additional_expenses: {
        Row: {
          category_id: string
          company_id: string | null
          created_at: string
          expense_type: string
          fixed_value: number | null
          id: string
          name: string
          percentage_value: number | null
          pricing_type: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          category_id: string
          company_id?: string | null
          created_at?: string
          expense_type: string
          fixed_value?: number | null
          id?: string
          name: string
          percentage_value?: number | null
          pricing_type: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          category_id?: string
          company_id?: string | null
          created_at?: string
          expense_type?: string
          fixed_value?: number | null
          id?: string
          name?: string
          percentage_value?: number | null
          pricing_type?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "additional_expenses_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "additional_expenses_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_history: {
        Row: {
          content: string
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          role: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      allocation_records: {
        Row: {
          allocation_id: string
          amount: number
          created_at: string
          from_account_id: string
          id: string
          to_account_id: string
        }
        Insert: {
          allocation_id: string
          amount: number
          created_at?: string
          from_account_id: string
          id?: string
          to_account_id: string
        }
        Update: {
          allocation_id?: string
          amount?: number
          created_at?: string
          from_account_id?: string
          id?: string
          to_account_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "allocation_records_allocation_id_fkey"
            columns: ["allocation_id"]
            isOneToOne: false
            referencedRelation: "allocations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "allocation_records_from_account_id_fkey"
            columns: ["from_account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "allocation_records_to_account_id_fkey"
            columns: ["to_account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      allocations: {
        Row: {
          company_id: string | null
          created_at: string
          date: string
          id: string
          total_amount: number
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          date?: string
          id?: string
          total_amount: number
        }
        Update: {
          company_id?: string | null
          created_at?: string
          date?: string
          id?: string
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "allocations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      articles_map: {
        Row: {
          category_id: string
          code: string
          created_at: string | null
          description: string | null
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          category_id?: string
          code: string
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          category_id?: string
          code?: string
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      auto_rules: {
        Row: {
          category_id: string | null
          category_name: string
          created_at: string | null
          id: string
          pattern: string
          project_id: string | null
          project_name: string | null
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          category_name: string
          created_at?: string | null
          id?: string
          pattern: string
          project_id?: string | null
          project_name?: string | null
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          category_name?: string
          created_at?: string | null
          id?: string
          pattern?: string
          project_id?: string | null
          project_name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "auto_rules_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "auto_rules_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      branch_analytics_settings: {
        Row: {
          company_id: string
          created_at: string
          expense_distribution_method: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          expense_distribution_method?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          expense_distribution_method?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      budget_allocations: {
        Row: {
          company_id: string | null
          created_at: string
          details: Json | null
          id: string
          total_amount: number
          transaction_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          details?: Json | null
          id?: string
          total_amount?: number
          transaction_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          details?: Json | null
          id?: string
          total_amount?: number
          transaction_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "budget_allocations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "budget_allocations_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      budget_loans: {
        Row: {
          amount: number
          company_id: string | null
          created_at: string
          from_account_id: string
          id: string
          initial_amount: number
          is_active: boolean
          to_account_id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount: number
          company_id?: string | null
          created_at?: string
          from_account_id: string
          id?: string
          initial_amount: number
          is_active?: boolean
          to_account_id: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          company_id?: string | null
          created_at?: string
          from_account_id?: string
          id?: string
          initial_amount?: number
          is_active?: boolean
          to_account_id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "budget_loans_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "budget_loans_from_account_id_fkey"
            columns: ["from_account_id"]
            isOneToOne: false
            referencedRelation: "virtual_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "budget_loans_to_account_id_fkey"
            columns: ["to_account_id"]
            isOneToOne: false
            referencedRelation: "virtual_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      budget_plans: {
        Row: {
          amount: number
          category_id: string
          created_at: string
          id: string
          month: string
          updated_at: string
          user_id: string | null
          year: number
        }
        Insert: {
          amount?: number
          category_id: string
          created_at?: string
          id?: string
          month: string
          updated_at?: string
          user_id?: string | null
          year: number
        }
        Update: {
          amount?: number
          category_id?: string
          created_at?: string
          id?: string
          month?: string
          updated_at?: string
          user_id?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "budget_plans_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      budget_settings: {
        Row: {
          company_id: string | null
          created_at: string
          id: string
          is_activated: boolean
          onboarding_data: Json | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          id?: string
          is_activated?: boolean
          onboarding_data?: Json | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          id?: string
          is_activated?: boolean
          onboarding_data?: Json | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "budget_settings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          account_id: string | null
          activity_type: string | null
          company_id: string
          created_at: string
          id: string
          is_direct: boolean | null
          is_system: boolean | null
          is_variable: boolean | null
          name: string
          type: string
          updated_at: string
          user_id: string | null
          virtual_account_id: string | null
        }
        Insert: {
          account_id?: string | null
          activity_type?: string | null
          company_id: string
          created_at?: string
          id?: string
          is_direct?: boolean | null
          is_system?: boolean | null
          is_variable?: boolean | null
          name: string
          type: string
          updated_at?: string
          user_id?: string | null
          virtual_account_id?: string | null
        }
        Update: {
          account_id?: string | null
          activity_type?: string | null
          company_id?: string
          created_at?: string
          id?: string
          is_direct?: boolean | null
          is_system?: boolean | null
          is_variable?: boolean | null
          name?: string
          type?: string
          updated_at?: string
          user_id?: string | null
          virtual_account_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_virtual_account_id_fkey"
            columns: ["virtual_account_id"]
            isOneToOne: false
            referencedRelation: "virtual_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          additional_info: string | null
          business_model: string | null
          country: string | null
          created_at: string
          description: string | null
          founding_year: number | null
          id: string
          is_active: boolean | null
          is_trial: boolean | null
          name: string
          subscription_end_date: string | null
          subscription_plan: string | null
          subscription_start_date: string | null
          team_structure: string | null
          trial_ends_at: string | null
          trial_starts_at: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          additional_info?: string | null
          business_model?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          founding_year?: number | null
          id?: string
          is_active?: boolean | null
          is_trial?: boolean | null
          name: string
          subscription_end_date?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          team_structure?: string | null
          trial_ends_at?: string | null
          trial_starts_at?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          additional_info?: string | null
          business_model?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          founding_year?: number | null
          id?: string
          is_active?: boolean | null
          is_trial?: boolean | null
          name?: string
          subscription_end_date?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          team_structure?: string | null
          trial_ends_at?: string | null
          trial_starts_at?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      company_invitations: {
        Row: {
          accepted: boolean | null
          company_id: string
          created_at: string
          created_by: string
          email: string
          id: string
          invite_code: string
          invite_code_6digit: string | null
          permissions: string[] | null
          role: Database["public"]["Enums"]["company_role"]
        }
        Insert: {
          accepted?: boolean | null
          company_id: string
          created_at?: string
          created_by: string
          email: string
          id?: string
          invite_code?: string
          invite_code_6digit?: string | null
          permissions?: string[] | null
          role?: Database["public"]["Enums"]["company_role"]
        }
        Update: {
          accepted?: boolean | null
          company_id?: string
          created_at?: string
          created_by?: string
          email?: string
          id?: string
          invite_code?: string
          invite_code_6digit?: string | null
          permissions?: string[] | null
          role?: Database["public"]["Enums"]["company_role"]
        }
        Relationships: [
          {
            foreignKeyName: "company_invitations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_members: {
        Row: {
          company_id: string
          company_name: string | null
          created_at: string | null
          email: string | null
          id: string
          permissions: string[] | null
          role: Database["public"]["Enums"]["company_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company_id: string
          company_name?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          permissions?: string[] | null
          role?: Database["public"]["Enums"]["company_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          company_id?: string
          company_name?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          permissions?: string[] | null
          role?: Database["public"]["Enums"]["company_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_company_members_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_tag_items: {
        Row: {
          created_at: string | null
          id: string
          name: string
          tag_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          tag_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          tag_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_tag_items_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "company_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      company_tags: {
        Row: {
          color: string
          company_id: string
          created_at: string | null
          id: string
          is_custom: boolean | null
          is_enabled: boolean | null
          is_kaspi_managed: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          color: string
          company_id: string
          created_at?: string | null
          id?: string
          is_custom?: boolean | null
          is_enabled?: boolean | null
          is_kaspi_managed?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          color?: string
          company_id?: string
          created_at?: string | null
          id?: string
          is_custom?: boolean | null
          is_enabled?: boolean | null
          is_kaspi_managed?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      errors_log: {
        Row: {
          created_at: string | null
          error_data: Json | null
          error_message: string
          field_name: string
          id: number
          import_id: string
          row_number: number
        }
        Insert: {
          created_at?: string | null
          error_data?: Json | null
          error_message: string
          field_name: string
          id?: number
          import_id: string
          row_number: number
        }
        Update: {
          created_at?: string | null
          error_data?: Json | null
          error_message?: string
          field_name?: string
          id?: number
          import_id?: string
          row_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "errors_log_import_id_fkey"
            columns: ["import_id"]
            isOneToOne: false
            referencedRelation: "imports_log"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_practicum_leads: {
        Row: {
          created_at: string
          id: string
          name: string
          phone: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          phone: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      implementation_checklist: {
        Row: {
          checklist_items: Json
          company_id: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          checklist_items?: Json
          company_id: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          checklist_items?: Json
          company_id?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      import_batches: {
        Row: {
          company_id: string
          created_at: string | null
          file_name: string
          id: string
          transaction_count: number
          user_id: string | null
        }
        Insert: {
          company_id: string
          created_at?: string | null
          file_name: string
          id?: string
          transaction_count: number
          user_id?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string | null
          file_name?: string
          id?: string
          transaction_count?: number
          user_id?: string | null
        }
        Relationships: []
      }
      imports_log: {
        Row: {
          accepted: number
          client_ip: unknown
          created_at: string | null
          id: string
          processing_time_ms: number | null
          rejected: number
          source: string
          total_rows: number
          unmapped_articles_count: number | null
          user_agent: string | null
          version: string
        }
        Insert: {
          accepted?: number
          client_ip?: unknown
          created_at?: string | null
          id?: string
          processing_time_ms?: number | null
          rejected?: number
          source: string
          total_rows?: number
          unmapped_articles_count?: number | null
          user_agent?: string | null
          version?: string
        }
        Update: {
          accepted?: number
          client_ip?: unknown
          created_at?: string | null
          id?: string
          processing_time_ms?: number | null
          rejected?: number
          source?: string
          total_rows?: number
          unmapped_articles_count?: number | null
          user_agent?: string | null
          version?: string
        }
        Relationships: []
      }
      inventory_items: {
        Row: {
          batch_id: string | null
          company_id: string | null
          created_at: string
          id: string
          material_id: string
          original_item_id: string | null
          purchase_id: string | null
          quantity: number
          remaining_quantity: number
          sku: string | null
          status: string
          transfer_id: string | null
          unit_cost: number
          updated_at: string
          user_id: string | null
          warehouse_id: string
        }
        Insert: {
          batch_id?: string | null
          company_id?: string | null
          created_at?: string
          id?: string
          material_id: string
          original_item_id?: string | null
          purchase_id?: string | null
          quantity: number
          remaining_quantity: number
          sku?: string | null
          status?: string
          transfer_id?: string | null
          unit_cost: number
          updated_at?: string
          user_id?: string | null
          warehouse_id: string
        }
        Update: {
          batch_id?: string | null
          company_id?: string | null
          created_at?: string
          id?: string
          material_id?: string
          original_item_id?: string | null
          purchase_id?: string | null
          quantity?: number
          remaining_quantity?: number
          sku?: string | null
          status?: string
          transfer_id?: string | null
          unit_cost?: number
          updated_at?: string
          user_id?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_original_item_id_fkey"
            columns: ["original_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_original_item_id_fkey"
            columns: ["original_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_view"
            referencedColumns: ["inventory_id"]
          },
          {
            foreignKeyName: "inventory_items_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_operations: {
        Row: {
          comment: string | null
          company_id: string | null
          create_transaction: boolean | null
          created_at: string
          date: string
          destination_warehouse_id: string | null
          expense_category_id: string | null
          id: string
          inventory_items_used: Json | null
          inventory_restored: boolean | null
          is_historical: boolean
          material_id: string
          operation_number: string | null
          operation_type: string
          preserve_batch: boolean | null
          quantity: number
          source_warehouse_id: string
          total_cost: number | null
          transaction_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          company_id?: string | null
          create_transaction?: boolean | null
          created_at?: string
          date?: string
          destination_warehouse_id?: string | null
          expense_category_id?: string | null
          id?: string
          inventory_items_used?: Json | null
          inventory_restored?: boolean | null
          is_historical?: boolean
          material_id: string
          operation_number?: string | null
          operation_type: string
          preserve_batch?: boolean | null
          quantity: number
          source_warehouse_id: string
          total_cost?: number | null
          transaction_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          company_id?: string | null
          create_transaction?: boolean | null
          created_at?: string
          date?: string
          destination_warehouse_id?: string | null
          expense_category_id?: string | null
          id?: string
          inventory_items_used?: Json | null
          inventory_restored?: boolean | null
          is_historical?: boolean
          material_id?: string
          operation_number?: string | null
          operation_type?: string
          preserve_batch?: boolean | null
          quantity?: number
          source_warehouse_id?: string
          total_cost?: number | null
          transaction_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_operations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_operations_destination_warehouse_id_fkey"
            columns: ["destination_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_operations_expense_category_id_fkey"
            columns: ["expense_category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_operations_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_operations_source_warehouse_id_fkey"
            columns: ["source_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_operations_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_usage: {
        Row: {
          company_id: string | null
          cost: number
          created_at: string
          id: string
          inventory_item_id: string
          quantity: number
          reference_id: string
          usage_type: string
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          cost: number
          created_at?: string
          id?: string
          inventory_item_id: string
          quantity: number
          reference_id: string
          usage_type: string
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          cost?: number
          created_at?: string
          id?: string
          inventory_item_id?: string
          quantity?: number
          reference_id?: string
          usage_type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_usage_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_usage_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_view"
            referencedColumns: ["inventory_id"]
          },
        ]
      }
      kaspi_categories: {
        Row: {
          commission_rate: number
          created_at: string
          id: string
          is_active: boolean
          kaspi_category_title: string
          updated_at: string
        }
        Insert: {
          commission_rate: number
          created_at?: string
          id?: string
          is_active?: boolean
          kaspi_category_title: string
          updated_at?: string
        }
        Update: {
          commission_rate?: number
          created_at?: string
          id?: string
          is_active?: boolean
          kaspi_category_title?: string
          updated_at?: string
        }
        Relationships: []
      }
      kaspi_integration_settings: {
        Row: {
          account_id: string | null
          api_token: string
          company_id: string
          created_at: string | null
          id: string
          is_active: boolean | null
          kaspi_company: string | null
          kaspi_company_name: string | null
          kaspi_store_id: string | null
          last_sync_at: string | null
          sync_frequency: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          account_id?: string | null
          api_token: string
          company_id: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          kaspi_company?: string | null
          kaspi_company_name?: string | null
          kaspi_store_id?: string | null
          last_sync_at?: string | null
          sync_frequency?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          account_id?: string | null
          api_token?: string
          company_id?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          kaspi_company?: string | null
          kaspi_company_name?: string | null
          kaspi_store_id?: string | null
          last_sync_at?: string | null
          sync_frequency?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_kaspi_integration_settings_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kaspi_integration_settings_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      kaspi_order_items: {
        Row: {
          base_price: number | null
          cogs_amount: number | null
          commission_amount: number | null
          commission_rate: number | null
          company_id: string
          created_at: string | null
          delivery_cost_seller_share: number | null
          entry_number: number | null
          expense_transaction_id: string | null
          id: string
          income_transaction_id: string | null
          kaspi_category_code: string | null
          kaspi_category_title: string | null
          kaspi_company: string | null
          kaspi_entry_id: string
          kaspi_name: string
          kaspi_order_id: string
          kaspi_sku: string
          kaspi_store_id: string | null
          kaspi_warehouse_id: string | null
          material_id: string | null
          processing_error: string | null
          processing_status: string | null
          quantity: number
          total_price: number
          unit_price: number
          unit_type: string | null
          updated_at: string | null
          warehouse_id: string | null
          weight: number | null
        }
        Insert: {
          base_price?: number | null
          cogs_amount?: number | null
          commission_amount?: number | null
          commission_rate?: number | null
          company_id: string
          created_at?: string | null
          delivery_cost_seller_share?: number | null
          entry_number?: number | null
          expense_transaction_id?: string | null
          id?: string
          income_transaction_id?: string | null
          kaspi_category_code?: string | null
          kaspi_category_title?: string | null
          kaspi_company?: string | null
          kaspi_entry_id: string
          kaspi_name: string
          kaspi_order_id: string
          kaspi_sku: string
          kaspi_store_id?: string | null
          kaspi_warehouse_id?: string | null
          material_id?: string | null
          processing_error?: string | null
          processing_status?: string | null
          quantity?: number
          total_price?: number
          unit_price?: number
          unit_type?: string | null
          updated_at?: string | null
          warehouse_id?: string | null
          weight?: number | null
        }
        Update: {
          base_price?: number | null
          cogs_amount?: number | null
          commission_amount?: number | null
          commission_rate?: number | null
          company_id?: string
          created_at?: string | null
          delivery_cost_seller_share?: number | null
          entry_number?: number | null
          expense_transaction_id?: string | null
          id?: string
          income_transaction_id?: string | null
          kaspi_category_code?: string | null
          kaspi_category_title?: string | null
          kaspi_company?: string | null
          kaspi_entry_id?: string
          kaspi_name?: string
          kaspi_order_id?: string
          kaspi_sku?: string
          kaspi_store_id?: string | null
          kaspi_warehouse_id?: string | null
          material_id?: string | null
          processing_error?: string | null
          processing_status?: string | null
          quantity?: number
          total_price?: number
          unit_price?: number
          unit_type?: string | null
          updated_at?: string | null
          warehouse_id?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_kaspi_order_items_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_kaspi_order_items_kaspi_order"
            columns: ["kaspi_order_id"]
            isOneToOne: false
            referencedRelation: "kaspi_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_kaspi_order_items_material"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_kaspi_order_items_warehouse"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      kaspi_orders: {
        Row: {
          commission_amount: number | null
          company_id: string
          created_at: string | null
          customer_name: string | null
          customer_phone: string | null
          delivery_address: string | null
          delivery_cost: number | null
          delivery_cost_for_seller: number | null
          delivery_date: string | null
          expense_transaction_id: string | null
          failed_items_count: number | null
          id: string
          income_transaction_id: string | null
          is_kaspi_delivery: boolean | null
          items_count: number | null
          kaspi_company: string | null
          kaspi_order_code: string
          kaspi_order_id: string
          kaspi_store_id: string | null
          order_date: string
          order_status: string
          processed_at: string | null
          processed_items_count: number | null
          sales_transaction_ids: string[] | null
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          commission_amount?: number | null
          company_id: string
          created_at?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          delivery_address?: string | null
          delivery_cost?: number | null
          delivery_cost_for_seller?: number | null
          delivery_date?: string | null
          expense_transaction_id?: string | null
          failed_items_count?: number | null
          id?: string
          income_transaction_id?: string | null
          is_kaspi_delivery?: boolean | null
          items_count?: number | null
          kaspi_company?: string | null
          kaspi_order_code: string
          kaspi_order_id: string
          kaspi_store_id?: string | null
          order_date: string
          order_status: string
          processed_at?: string | null
          processed_items_count?: number | null
          sales_transaction_ids?: string[] | null
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          commission_amount?: number | null
          company_id?: string
          created_at?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          delivery_address?: string | null
          delivery_cost?: number | null
          delivery_cost_for_seller?: number | null
          delivery_date?: string | null
          expense_transaction_id?: string | null
          failed_items_count?: number | null
          id?: string
          income_transaction_id?: string | null
          is_kaspi_delivery?: boolean | null
          items_count?: number | null
          kaspi_company?: string | null
          kaspi_order_code?: string
          kaspi_order_id?: string
          kaspi_store_id?: string | null
          order_date?: string
          order_status?: string
          processed_at?: string | null
          processed_items_count?: number | null
          sales_transaction_ids?: string[] | null
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_kaspi_orders_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kaspi_orders_expense_transaction_id_fkey"
            columns: ["expense_transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kaspi_orders_income_transaction_id_fkey"
            columns: ["income_transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      kaspi_pending_operations: {
        Row: {
          commission_amount: number | null
          company_id: string
          created_at: string | null
          delivery_cost: number | null
          error_message: string | null
          id: string
          kaspi_company: string | null
          kaspi_order_code: string | null
          kaspi_product_id: string
          kaspi_sku: string
          kaspi_warehouse_id: string | null
          max_retries: number | null
          operation_type: string
          order_data: Json | null
          pending_reason: string
          price_per_unit: number | null
          quantity: number
          retry_count: number | null
          status: string | null
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          commission_amount?: number | null
          company_id: string
          created_at?: string | null
          delivery_cost?: number | null
          error_message?: string | null
          id?: string
          kaspi_company?: string | null
          kaspi_order_code?: string | null
          kaspi_product_id: string
          kaspi_sku: string
          kaspi_warehouse_id?: string | null
          max_retries?: number | null
          operation_type: string
          order_data?: Json | null
          pending_reason: string
          price_per_unit?: number | null
          quantity: number
          retry_count?: number | null
          status?: string | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          commission_amount?: number | null
          company_id?: string
          created_at?: string | null
          delivery_cost?: number | null
          error_message?: string | null
          id?: string
          kaspi_company?: string | null
          kaspi_order_code?: string | null
          kaspi_product_id?: string
          kaspi_sku?: string
          kaspi_warehouse_id?: string | null
          max_retries?: number | null
          operation_type?: string
          order_data?: Json | null
          pending_reason?: string
          price_per_unit?: number | null
          quantity?: number
          retry_count?: number | null
          status?: string | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_kaspi_pending_operations_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      kaspi_product_costs: {
        Row: {
          company_id: string
          cost_percentage: number | null
          cost_price: number
          cost_source: string | null
          created_at: string | null
          id: string
          kaspi_product_id: string
          kaspi_sku: string
          updated_at: string | null
        }
        Insert: {
          company_id: string
          cost_percentage?: number | null
          cost_price?: number
          cost_source?: string | null
          created_at?: string | null
          id?: string
          kaspi_product_id: string
          kaspi_sku: string
          updated_at?: string | null
        }
        Update: {
          company_id?: string
          cost_percentage?: number | null
          cost_price?: number
          cost_source?: string | null
          created_at?: string | null
          id?: string
          kaspi_product_id?: string
          kaspi_sku?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_kaspi_product_costs_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      kaspi_product_mappings: {
        Row: {
          company_id: string
          created_at: string
          id: string
          kaspi_company: string | null
          kaspi_name: string
          kaspi_sku: string
          material_id: string
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          kaspi_company?: string | null
          kaspi_name: string
          kaspi_sku: string
          material_id: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          kaspi_company?: string | null
          kaspi_name?: string
          kaspi_sku?: string
          material_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_kaspi_product_mappings_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_kaspi_product_mappings_material"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
        ]
      }
      kaspi_sync_logs: {
        Row: {
          company_id: string
          completed_at: string | null
          details: Json | null
          duration_seconds: number | null
          id: string
          integration_id: string | null
          records_failed: number | null
          records_processed: number | null
          records_successful: number | null
          started_at: string | null
          status: string
          sync_type: string
        }
        Insert: {
          company_id: string
          completed_at?: string | null
          details?: Json | null
          duration_seconds?: number | null
          id?: string
          integration_id?: string | null
          records_failed?: number | null
          records_processed?: number | null
          records_successful?: number | null
          started_at?: string | null
          status: string
          sync_type: string
        }
        Update: {
          company_id?: string
          completed_at?: string | null
          details?: Json | null
          duration_seconds?: number | null
          id?: string
          integration_id?: string | null
          records_failed?: number | null
          records_processed?: number | null
          records_successful?: number | null
          started_at?: string | null
          status?: string
          sync_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_kaspi_sync_logs_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kaspi_sync_logs_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "kaspi_integration_settings"
            referencedColumns: ["id"]
          },
        ]
      }
      kaspi_warehouse_mappings: {
        Row: {
          company_id: string
          created_at: string
          id: string
          kaspi_company: string | null
          kaspi_store_id: string
          updated_at: string
          warehouse_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          kaspi_company?: string | null
          kaspi_store_id: string
          updated_at?: string
          warehouse_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          kaspi_company?: string | null
          kaspi_store_id?: string
          updated_at?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_kaspi_warehouse_mappings_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_kaspi_warehouse_mappings_warehouse"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      manager_settings: {
        Row: {
          commission_rate: number | null
          company_id: string | null
          created_at: string | null
          fixed_salary: number | null
          id: string
          manager_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          commission_rate?: number | null
          company_id?: string | null
          created_at?: string | null
          fixed_salary?: number | null
          id?: string
          manager_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          commission_rate?: number | null
          company_id?: string | null
          created_at?: string | null
          fixed_salary?: number | null
          id?: string
          manager_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "manager_settings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "manager_settings_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "company_tag_items"
            referencedColumns: ["id"]
          },
        ]
      }
      materials: {
        Row: {
          category_id: string
          company_id: string | null
          created_at: string
          description: string | null
          expense_category_id: string | null
          id: string
          kaspi_names: string[] | null
          kaspi_product_id: string | null
          kaspi_sku: string[] | null
          kaspi_sync_enabled: boolean | null
          name: string
          unit_id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          category_id: string
          company_id?: string | null
          created_at?: string
          description?: string | null
          expense_category_id?: string | null
          id?: string
          kaspi_names?: string[] | null
          kaspi_product_id?: string | null
          kaspi_sku?: string[] | null
          kaspi_sync_enabled?: boolean | null
          name: string
          unit_id: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          category_id?: string
          company_id?: string | null
          created_at?: string
          description?: string | null
          expense_category_id?: string | null
          id?: string
          kaspi_names?: string[] | null
          kaspi_product_id?: string | null
          kaspi_sku?: string[] | null
          kaspi_sync_enabled?: boolean | null
          name?: string
          unit_id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "materials_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "inventory_view"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "materials_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "materials_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "materials_expense_category_id_fkey"
            columns: ["expense_category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "materials_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      onec_category_mappings: {
        Row: {
          category_id: string | null
          company_id: string | null
          created_at: string | null
          id: string
          onec_field_path: string
          onec_field_value: string
          updated_at: string | null
        }
        Insert: {
          category_id?: string | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          onec_field_path: string
          onec_field_value: string
          updated_at?: string | null
        }
        Update: {
          category_id?: string | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          onec_field_path?: string
          onec_field_value?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onec_category_mappings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "onec_category_mappings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      onec_company_mappings: {
        Row: {
          company_id: string | null
          created_at: string | null
          id: string
          onec_organization_guid: string
          onec_organization_name: string
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          onec_organization_guid: string
          onec_organization_name: string
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          onec_organization_guid?: string
          onec_organization_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onec_company_mappings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      onec_complex_category_mappings: {
        Row: {
          category_id: string
          company_id: string
          created_at: string | null
          id: string
          is_active: boolean | null
          logical_operator: string
          mapping_name: string
          priority: number | null
          updated_at: string | null
        }
        Insert: {
          category_id: string
          company_id: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          logical_operator: string
          mapping_name: string
          priority?: number | null
          updated_at?: string | null
        }
        Update: {
          category_id?: string
          company_id?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          logical_operator?: string
          mapping_name?: string
          priority?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onec_complex_category_mappings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "onec_complex_category_mappings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      onec_integration_data: {
        Row: {
          client_ip: string | null
          created_at: string | null
          document_guid: string | null
          id: string
          processed: boolean | null
          raw_data: Json
          received_at: string | null
          transaction_id: string | null
        }
        Insert: {
          client_ip?: string | null
          created_at?: string | null
          document_guid?: string | null
          id?: string
          processed?: boolean | null
          raw_data: Json
          received_at?: string | null
          transaction_id?: string | null
        }
        Update: {
          client_ip?: string | null
          created_at?: string | null
          document_guid?: string | null
          id?: string
          processed?: boolean | null
          raw_data?: Json
          received_at?: string | null
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onec_integration_data_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      onec_mapping_conditions: {
        Row: {
          created_at: string | null
          field_path: string
          id: string
          mapping_id: string
          operator: string
          value: string
        }
        Insert: {
          created_at?: string | null
          field_path: string
          id?: string
          mapping_id: string
          operator: string
          value: string
        }
        Update: {
          created_at?: string | null
          field_path?: string
          id?: string
          mapping_id?: string
          operator?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "onec_mapping_conditions_mapping_id_fkey"
            columns: ["mapping_id"]
            isOneToOne: false
            referencedRelation: "onec_complex_category_mappings"
            referencedColumns: ["id"]
          },
        ]
      }
      onec_webhook_data: {
        Row: {
          created_at: string | null
          document_guid: string | null
          error_message: string | null
          id: string
          processed: boolean | null
          processed_at: string | null
          raw_data: Json
          received_at: string | null
          transaction_id: string | null
        }
        Insert: {
          created_at?: string | null
          document_guid?: string | null
          error_message?: string | null
          id?: string
          processed?: boolean | null
          processed_at?: string | null
          raw_data: Json
          received_at?: string | null
          transaction_id?: string | null
        }
        Update: {
          created_at?: string | null
          document_guid?: string | null
          error_message?: string | null
          id?: string
          processed?: boolean | null
          processed_at?: string | null
          raw_data?: Json
          received_at?: string | null
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onec_webhook_data_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_balance: {
        Row: {
          available_balance: number
          created_at: string
          id: string
          last_payout_date: string | null
          partner_id: string
          pending_balance: number
          total_earned: number
          total_paid: number
          updated_at: string
        }
        Insert: {
          available_balance?: number
          created_at?: string
          id?: string
          last_payout_date?: string | null
          partner_id: string
          pending_balance?: number
          total_earned?: number
          total_paid?: number
          updated_at?: string
        }
        Update: {
          available_balance?: number
          created_at?: string
          id?: string
          last_payout_date?: string | null
          partner_id?: string
          pending_balance?: number
          total_earned?: number
          total_paid?: number
          updated_at?: string
        }
        Relationships: []
      }
      partner_clients: {
        Row: {
          client_notified: string | null
          comments: string | null
          communication_method: string | null
          company: string | null
          company_activity: string | null
          company_city: string | null
          cooperation_type: string
          created_at: string
          earnings_amount: number | null
          email: string
          how_know_client: string | null
          id: string
          name: string
          next_task: string | null
          partner_commission_rate: number | null
          partner_id: string
          payment_date: string | null
          phone: string | null
          status: string
          subscription_days_left: number | null
          tariff: string | null
          task_deadline: string | null
          updated_at: string
        }
        Insert: {
          client_notified?: string | null
          comments?: string | null
          communication_method?: string | null
          company?: string | null
          company_activity?: string | null
          company_city?: string | null
          cooperation_type: string
          created_at?: string
          earnings_amount?: number | null
          email: string
          how_know_client?: string | null
          id?: string
          name: string
          next_task?: string | null
          partner_commission_rate?: number | null
          partner_id: string
          payment_date?: string | null
          phone?: string | null
          status: string
          subscription_days_left?: number | null
          tariff?: string | null
          task_deadline?: string | null
          updated_at?: string
        }
        Update: {
          client_notified?: string | null
          comments?: string | null
          communication_method?: string | null
          company?: string | null
          company_activity?: string | null
          company_city?: string | null
          cooperation_type?: string
          created_at?: string
          earnings_amount?: number | null
          email?: string
          how_know_client?: string | null
          id?: string
          name?: string
          next_task?: string | null
          partner_commission_rate?: number | null
          partner_id?: string
          payment_date?: string | null
          phone?: string | null
          status?: string
          subscription_days_left?: number | null
          tariff?: string | null
          task_deadline?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      partner_courses: {
        Row: {
          category: string
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          is_published: boolean | null
          order_index: number | null
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          order_index?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          order_index?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      partner_earnings: {
        Row: {
          amount: number
          client_id: string | null
          created_at: string
          description: string | null
          earning_type: string
          id: string
          month_date: string
          partner_id: string
          status: string
          updated_at: string
        }
        Insert: {
          amount: number
          client_id?: string | null
          created_at?: string
          description?: string | null
          earning_type: string
          id?: string
          month_date: string
          partner_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          client_id?: string | null
          created_at?: string
          description?: string | null
          earning_type?: string
          id?: string
          month_date?: string
          partner_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_earnings_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "partner_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_lessons: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          is_published: boolean | null
          order_index: number | null
          title: string
          updated_at: string
          video_url: string | null
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          order_index?: number | null
          title: string
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_published?: boolean | null
          order_index?: number | null
          title?: string
          updated_at?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partner_lessons_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "partner_courses"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_materials: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          file_type: string | null
          file_url: string | null
          id: string
          is_published: boolean | null
          order_index: number | null
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          is_published?: boolean | null
          order_index?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          is_published?: boolean | null
          order_index?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      partner_monthly_activity: {
        Row: {
          created_at: string
          day: number
          id: string
          metric_key: string
          month: number
          partner_id: string
          updated_at: string
          value: number
          year: number
        }
        Insert: {
          created_at?: string
          day: number
          id?: string
          metric_key: string
          month: number
          partner_id: string
          updated_at?: string
          value?: number
          year: number
        }
        Update: {
          created_at?: string
          day?: number
          id?: string
          metric_key?: string
          month?: number
          partner_id?: string
          updated_at?: string
          value?: number
          year?: number
        }
        Relationships: []
      }
      partner_payment_methods: {
        Row: {
          account_holder: string | null
          account_number: string | null
          bank_name: string | null
          created_at: string
          id: string
          is_active: boolean | null
          is_default: boolean | null
          method_type: string
          partner_id: string
          updated_at: string
        }
        Insert: {
          account_holder?: string | null
          account_number?: string | null
          bank_name?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          method_type: string
          partner_id: string
          updated_at?: string
        }
        Update: {
          account_holder?: string | null
          account_number?: string | null
          bank_name?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          method_type?: string
          partner_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      partner_payouts: {
        Row: {
          amount: number
          created_at: string
          id: string
          partner_id: string
          payment_method: string
          processed_at: string | null
          reference_number: string | null
          requested_at: string
          status: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          partner_id: string
          payment_method: string
          processed_at?: string | null
          reference_number?: string | null
          requested_at?: string
          status?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          partner_id?: string
          payment_method?: string
          processed_at?: string | null
          reference_number?: string | null
          requested_at?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      partner_progress: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          lesson_id: string
          partner_id: string
          progress_percentage: number | null
          updated_at: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          lesson_id: string
          partner_id: string
          progress_percentage?: number | null
          updated_at?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          lesson_id?: string
          partner_id?: string
          progress_percentage?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "partner_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_sessions: {
        Row: {
          created_at: string | null
          expires_at: string
          id: string
          partner_id: string
          session_token: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          expires_at: string
          id?: string
          partner_id: string
          session_token: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          expires_at?: string
          id?: string
          partner_id?: string
          session_token?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partner_sessions_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_statistics: {
        Row: {
          active_clients_count: number
          clients_count: number
          created_at: string | null
          earnings_amount: number
          id: string
          month_date: string
          partner_id: string
          updated_at: string | null
        }
        Insert: {
          active_clients_count?: number
          clients_count?: number
          created_at?: string | null
          earnings_amount?: number
          id?: string
          month_date: string
          partner_id: string
          updated_at?: string | null
        }
        Update: {
          active_clients_count?: number
          clients_count?: number
          created_at?: string | null
          earnings_amount?: number
          id?: string
          month_date?: string
          partner_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partner_statistics_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      partners: {
        Row: {
          city: string | null
          commission_rate: number | null
          company_name: string | null
          created_at: string | null
          current_month_earnings: number | null
          email: string
          first_name: string
          id: string
          last_login: string | null
          last_month_earnings: number | null
          last_name: string | null
          partner_level: Database["public"]["Enums"]["partner_level"] | null
          password_hash: string
          phone: string | null
          quarter_earnings: number | null
          referral_code: string | null
          status: Database["public"]["Enums"]["partner_status"] | null
          total_earnings: number | null
          updated_at: string | null
        }
        Insert: {
          city?: string | null
          commission_rate?: number | null
          company_name?: string | null
          created_at?: string | null
          current_month_earnings?: number | null
          email: string
          first_name: string
          id?: string
          last_login?: string | null
          last_month_earnings?: number | null
          last_name?: string | null
          partner_level?: Database["public"]["Enums"]["partner_level"] | null
          password_hash: string
          phone?: string | null
          quarter_earnings?: number | null
          referral_code?: string | null
          status?: Database["public"]["Enums"]["partner_status"] | null
          total_earnings?: number | null
          updated_at?: string | null
        }
        Update: {
          city?: string | null
          commission_rate?: number | null
          company_name?: string | null
          created_at?: string | null
          current_month_earnings?: number | null
          email?: string
          first_name?: string
          id?: string
          last_login?: string | null
          last_month_earnings?: number | null
          last_name?: string | null
          partner_level?: Database["public"]["Enums"]["partner_level"] | null
          password_hash?: string
          phone?: string | null
          quarter_earnings?: number | null
          referral_code?: string | null
          status?: Database["public"]["Enums"]["partner_status"] | null
          total_earnings?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      product_categories: {
        Row: {
          company_id: string | null
          created_at: string
          description: string | null
          id: string
          is_system: boolean | null
          name: string
          type: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_system?: boolean | null
          name: string
          type?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_system?: boolean | null
          name?: string
          type?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          id: string
          needs_setup_help: boolean | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
          needs_setup_help?: boolean | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          needs_setup_help?: boolean | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          id: string
          is_default: boolean | null
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_default?: boolean | null
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_default?: boolean | null
          name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      purchase_transactions: {
        Row: {
          account_id: string | null
          batch_id: string | null
          comment: string | null
          company_id: string | null
          created_at: string
          date: string
          expense_category_id: string | null
          id: string
          material_id: string
          operation_number: string | null
          price_per_unit: number
          product_category_id: string | null
          quantity: number
          sku: string | null
          total_amount: number
          transaction_id: string | null
          updated_at: string
          user_id: string | null
          warehouse_id: string
        }
        Insert: {
          account_id?: string | null
          batch_id?: string | null
          comment?: string | null
          company_id?: string | null
          created_at?: string
          date?: string
          expense_category_id?: string | null
          id?: string
          material_id: string
          operation_number?: string | null
          price_per_unit: number
          product_category_id?: string | null
          quantity: number
          sku?: string | null
          total_amount: number
          transaction_id?: string | null
          updated_at?: string
          user_id?: string | null
          warehouse_id: string
        }
        Update: {
          account_id?: string | null
          batch_id?: string | null
          comment?: string | null
          company_id?: string | null
          created_at?: string
          date?: string
          expense_category_id?: string | null
          id?: string
          material_id?: string
          operation_number?: string | null
          price_per_unit?: number
          product_category_id?: string | null
          quantity?: number
          sku?: string | null
          total_amount?: number
          transaction_id?: string | null
          updated_at?: string
          user_id?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_purchase_transactions_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_transactions_expense_category_id_fkey"
            columns: ["expense_category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_transactions_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_transactions_product_category_id_fkey"
            columns: ["product_category_id"]
            isOneToOne: false
            referencedRelation: "inventory_view"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "purchase_transactions_product_category_id_fkey"
            columns: ["product_category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_transactions_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_transactions_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      recurring_payments: {
        Row: {
          account_id: string | null
          amount: number
          category_id: string | null
          comment: string | null
          company_id: string | null
          created_at: string
          day_of_month: number | null
          day_of_week: number | null
          delta_end: number | null
          delta_start: number | null
          frequency: string
          id: string
          is_active: boolean
          name: string
          next_generation_date: string
          project_id: string | null
          start_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_id?: string | null
          amount: number
          category_id?: string | null
          comment?: string | null
          company_id?: string | null
          created_at?: string
          day_of_month?: number | null
          day_of_week?: number | null
          delta_end?: number | null
          delta_start?: number | null
          frequency: string
          id?: string
          is_active?: boolean
          name: string
          next_generation_date: string
          project_id?: string | null
          start_date: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_id?: string | null
          amount?: number
          category_id?: string | null
          comment?: string | null
          company_id?: string | null
          created_at?: string
          day_of_month?: number | null
          day_of_week?: number | null
          delta_end?: number | null
          delta_start?: number | null
          frequency?: string
          id?: string
          is_active?: boolean
          name?: string
          next_generation_date?: string
          project_id?: string | null
          start_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_recurring_payments_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_recurring_payments_project_id"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_payments_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_payments_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_transactions: {
        Row: {
          account_id: string | null
          additional_expense_ids: string[] | null
          additional_expenses: Json | null
          batches: Json | null
          comment: string | null
          company_id: string | null
          cost_amount: number
          created_at: string
          date: string
          expense_category_id: string | null
          expense_transaction_id: string | null
          expenses_total: number | null
          id: string
          income_category_id: string | null
          income_transaction_id: string | null
          inventory_items_used: Json | null
          margin: number
          material_id: string
          operation_number: string | null
          price_per_unit: number
          product_category_id: string | null
          quantity: number
          total_amount: number
          updated_at: string
          user_id: string | null
          warehouse_id: string
        }
        Insert: {
          account_id?: string | null
          additional_expense_ids?: string[] | null
          additional_expenses?: Json | null
          batches?: Json | null
          comment?: string | null
          company_id?: string | null
          cost_amount: number
          created_at?: string
          date?: string
          expense_category_id?: string | null
          expense_transaction_id?: string | null
          expenses_total?: number | null
          id?: string
          income_category_id?: string | null
          income_transaction_id?: string | null
          inventory_items_used?: Json | null
          margin: number
          material_id: string
          operation_number?: string | null
          price_per_unit: number
          product_category_id?: string | null
          quantity: number
          total_amount: number
          updated_at?: string
          user_id?: string | null
          warehouse_id: string
        }
        Update: {
          account_id?: string | null
          additional_expense_ids?: string[] | null
          additional_expenses?: Json | null
          batches?: Json | null
          comment?: string | null
          company_id?: string | null
          cost_amount?: number
          created_at?: string
          date?: string
          expense_category_id?: string | null
          expense_transaction_id?: string | null
          expenses_total?: number | null
          id?: string
          income_category_id?: string | null
          income_transaction_id?: string | null
          inventory_items_used?: Json | null
          margin?: number
          material_id?: string
          operation_number?: string | null
          price_per_unit?: number
          product_category_id?: string | null
          quantity?: number
          total_amount?: number
          updated_at?: string
          user_id?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_sales_transactions_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_transactions_expense_category_id_fkey"
            columns: ["expense_category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_transactions_expense_transaction_id_fkey"
            columns: ["expense_transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_transactions_income_category_id_fkey"
            columns: ["income_category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_transactions_income_transaction_id_fkey"
            columns: ["income_transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_transactions_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_transactions_product_category_id_fkey"
            columns: ["product_category_id"]
            isOneToOne: false
            referencedRelation: "inventory_view"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "sales_transactions_product_category_id_fkey"
            columns: ["product_category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_transactions_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          company_id: string
          currency: string | null
          id: string
          start_date: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company_id: string
          currency?: string | null
          id?: string
          start_date?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company_id?: string
          currency?: string | null
          id?: string
          start_date?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "settings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          company_id: string
          created_at: string
          id: string
          is_trial: boolean | null
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_end_date: string | null
          subscription_plan: string | null
          subscription_start_date: string | null
          trial_ends_at: string | null
          trial_starts_at: string | null
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          is_trial?: boolean | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_end_date?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          trial_ends_at?: string | null
          trial_starts_at?: string | null
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          is_trial?: boolean | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_end_date?: string | null
          subscription_plan?: string | null
          subscription_start_date?: string | null
          trial_ends_at?: string | null
          trial_starts_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      tags_rules: {
        Row: {
          condition_field: string
          condition_operator: string
          condition_value: string
          created_at: string | null
          id: number
          is_active: boolean | null
          priority: number | null
          rule_name: string
          tag_template: string
          updated_at: string | null
        }
        Insert: {
          condition_field: string
          condition_operator: string
          condition_value: string
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          priority?: number | null
          rule_name: string
          tag_template: string
          updated_at?: string | null
        }
        Update: {
          condition_field?: string
          condition_operator?: string
          condition_value?: string
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          priority?: number | null
          rule_name?: string
          tag_template?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          account_id: string | null
          amount: number | null
          category_id: string | null
          comment: string | null
          company_id: string
          created_at: string
          execution_date: string[] | null
          execution_end_date: string | null
          execution_start_date: string | null
          from_account_id: string | null
          id: string
          import_batch_id: string | null
          is_executed: boolean | null
          is_paid: boolean | null
          is_recurring: boolean | null
          payment_date: string | null
          project_id: string | null
          recurring_payment_id: string | null
          running_balance: number | null
          tag_item_ids: string[] | null
          to_account_id: string | null
          transaction_type: string | null
          transfer_reference_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          account_id?: string | null
          amount?: number | null
          category_id?: string | null
          comment?: string | null
          company_id: string
          created_at?: string
          execution_date?: string[] | null
          execution_end_date?: string | null
          execution_start_date?: string | null
          from_account_id?: string | null
          id?: string
          import_batch_id?: string | null
          is_executed?: boolean | null
          is_paid?: boolean | null
          is_recurring?: boolean | null
          payment_date?: string | null
          project_id?: string | null
          recurring_payment_id?: string | null
          running_balance?: number | null
          tag_item_ids?: string[] | null
          to_account_id?: string | null
          transaction_type?: string | null
          transfer_reference_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          account_id?: string | null
          amount?: number | null
          category_id?: string | null
          comment?: string | null
          company_id?: string
          created_at?: string
          execution_date?: string[] | null
          execution_end_date?: string | null
          execution_start_date?: string | null
          from_account_id?: string | null
          id?: string
          import_batch_id?: string | null
          is_executed?: boolean | null
          is_paid?: boolean | null
          is_recurring?: boolean | null
          payment_date?: string | null
          project_id?: string | null
          recurring_payment_id?: string | null
          running_balance?: number | null
          tag_item_ids?: string[] | null
          to_account_id?: string | null
          transaction_type?: string | null
          transfer_reference_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_transactions_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_transactions_project_id"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_from_account_id_fkey"
            columns: ["from_account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_import_batch_id_fkey"
            columns: ["import_batch_id"]
            isOneToOne: false
            referencedRelation: "import_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_recurring_payment_id_fkey"
            columns: ["recurring_payment_id"]
            isOneToOne: false
            referencedRelation: "recurring_payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_to_account_id_fkey"
            columns: ["to_account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      unit_economics: {
        Row: {
          company_id: string | null
          created_at: string
          id: string
          month_date: string
          profit_target: number
          sales_quantity: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          id?: string
          month_date: string
          profit_target?: number
          sales_quantity?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          id?: string
          month_date?: string
          profit_target?: number
          sales_quantity?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "unit_economics_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      units: {
        Row: {
          company_id: string | null
          created_at: string
          id: string
          name: string
          shortname: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          id?: string
          name: string
          shortname: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          id?: string
          name?: string
          shortname?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      unmapped_1c_transactions: {
        Row: {
          amount: number
          company_id: string
          created_at: string | null
          currency: string | null
          description: string | null
          document_guid: string | null
          document_type: string | null
          id: string
          organization_guid: string | null
          organization_name: string | null
          payment_date: string
          processed_at: string | null
          processed_by: string | null
          status: string | null
          updated_at: string | null
          webhook_data_id: string
        }
        Insert: {
          amount: number
          company_id: string
          created_at?: string | null
          currency?: string | null
          description?: string | null
          document_guid?: string | null
          document_type?: string | null
          id?: string
          organization_guid?: string | null
          organization_name?: string | null
          payment_date: string
          processed_at?: string | null
          processed_by?: string | null
          status?: string | null
          updated_at?: string | null
          webhook_data_id: string
        }
        Update: {
          amount?: number
          company_id?: string
          created_at?: string | null
          currency?: string | null
          description?: string | null
          document_guid?: string | null
          document_type?: string | null
          id?: string
          organization_guid?: string | null
          organization_name?: string | null
          payment_date?: string
          processed_at?: string | null
          processed_by?: string | null
          status?: string | null
          updated_at?: string | null
          webhook_data_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "unmapped_1c_transactions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "unmapped_1c_transactions_webhook_data_id_fkey"
            columns: ["webhook_data_id"]
            isOneToOne: false
            referencedRelation: "onec_integration_data"
            referencedColumns: ["id"]
          },
        ]
      }
      user_company_selection: {
        Row: {
          company_id: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_theme_preferences: {
        Row: {
          created_at: string
          id: string
          theme: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          theme?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          theme?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      virtual_accounts: {
        Row: {
          allocation_percentage: number
          balance: number
          company_id: string | null
          created_at: string
          id: string
          is_active: boolean
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          allocation_percentage?: number
          balance?: number
          company_id?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          allocation_percentage?: number
          balance?: number
          company_id?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "virtual_accounts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      warehouses: {
        Row: {
          company_id: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          kaspi_sync_enabled: boolean | null
          kaspi_warehouse_id: string | null
          location: string | null
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          kaspi_sync_enabled?: boolean | null
          kaspi_warehouse_id?: string | null
          location?: string | null
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          kaspi_sync_enabled?: boolean | null
          kaspi_warehouse_id?: string | null
          location?: string | null
          name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "warehouses_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      company_admins_view: {
        Row: {
          company_id: string | null
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_company_members_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_members_view: {
        Row: {
          company_id: string | null
          created_at: string | null
          id: string | null
          role: Database["public"]["Enums"]["company_role"] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          id?: string | null
          role?: Database["public"]["Enums"]["company_role"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          id?: string | null
          role?: Database["public"]["Enums"]["company_role"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_company_members_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_view: {
        Row: {
          category_id: string | null
          category_name: string | null
          company_id: string | null
          inventory_id: string | null
          material_id: string | null
          material_name: string | null
          quantity: number | null
          remaining_quantity: number | null
          status: string | null
          unit_cost: number | null
          unit_shortname: string | null
          warehouse_id: string | null
          warehouse_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_cash_flow: {
        Row: {
          company_id: string | null
          financial_cash_flow: number | null
          financial_expense_paid: number | null
          financial_income_paid: number | null
          investment_cash_flow: number | null
          investment_expense_paid: number | null
          investment_income_paid: number | null
          last_updated: string | null
          month_date: string | null
          net_cash_flow: number | null
          operating_cash_flow: number | null
          operating_expense_paid: number | null
          operating_income_paid: number | null
          total_expense_unpaid: number | null
          total_income_unpaid: number | null
          total_transactions: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_transactions_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_cash_flow_table: {
        Row: {
          category_amounts: Json | null
          company_id: string | null
          cumulative_balance: number | null
          expense_categories: Json | null
          financial_cash_flow: number | null
          financial_categories: Json | null
          financial_expense: number | null
          financial_income: number | null
          income_categories: Json | null
          initial_balance: number | null
          investment_cash_flow: number | null
          investment_categories: Json | null
          investment_expense: number | null
          investment_income: number | null
          last_updated: string | null
          month_date: string | null
          month_initial_balance: number | null
          month_num: number | null
          net_cash_flow: number | null
          operational_cash_flow: number | null
          operational_categories: Json | null
          operational_expense: number | null
          operational_income: number | null
          year: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_transactions_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_profit_loss_executed_table: {
        Row: {
          category_amounts: Json | null
          company_id: string | null
          contribution_margin: number | null
          contribution_margin_percent: number | null
          direct_cost_categories: Json | null
          execution_percentage: number | null
          fixed_cost_categories: Json | null
          gross_margin_percent: number | null
          gross_profit: number | null
          last_updated: string | null
          month_num: number | null
          net_margin_percent: number | null
          net_profit: number | null
          operating_margin_percent: number | null
          operating_profit: number | null
          revenue_categories: Json | null
          total_direct_costs: number | null
          total_fixed_costs: number | null
          total_revenue: number | null
          total_variable_costs: number | null
          variable_cost_categories: Json | null
          year: number | null
        }
        Relationships: []
      }
      monthly_profit_loss_table: {
        Row: {
          category_amounts: Json | null
          company_id: string | null
          contribution_margin: number | null
          contribution_margin_percent: number | null
          direct_cost_categories: Json | null
          fixed_cost_categories: Json | null
          gross_margin_percent: number | null
          gross_profit: number | null
          last_updated: string | null
          month_num: number | null
          net_margin_percent: number | null
          net_profit: number | null
          revenue_categories: Json | null
          total_direct_costs: number | null
          total_fixed_costs: number | null
          total_revenue: number | null
          total_variable_costs: number | null
          variable_cost_categories: Json | null
          year: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      accept_invitation: { Args: { invite_code: string }; Returns: Json }
      accept_invitation_by_code:
        | {
            Args: {
              p_company_id: string
              p_email: string
              p_permissions: string[]
              p_role?: Database["public"]["Enums"]["company_role"]
            }
            Returns: Json
          }
        | {
            Args: { invite_code_6digit: string; user_id?: string }
            Returns: Json
          }
      add_kaspi_company_to_stores_tag: {
        Args: { company_id: string; kaspi_company_name: string }
        Returns: undefined
      }
      add_user_to_company: {
        Args: { company_uuid: string }
        Returns: undefined
      }
      bulk_recalculate_running_balances: {
        Args: { p_account_ids: string[]; p_company_id: string }
        Returns: undefined
      }
      bytea_to_text: { Args: { data: string }; Returns: string }
      calculate_delivery_cost_seller_shares: {
        Args: { order_id: string }
        Returns: undefined
      }
      calculate_kaspi_item_cogs: {
        Args: { item_id: string }
        Returns: undefined
      }
      calculate_monthly_cash_flow_by_tags: {
        Args: {
          p_company_id: string
          p_tag_item_ids?: string[]
          p_year: number
        }
        Returns: {
          category_amounts: Json
          company_id: string
          cumulative_balance: number
          expense_categories: Json
          financial_cash_flow: number
          financial_categories: Json
          financial_expense: number
          financial_income: number
          income_categories: Json
          initial_balance: number
          investment_cash_flow: number
          investment_categories: Json
          investment_expense: number
          investment_income: number
          last_updated: string
          month_initial_balance: number
          month_num: number
          net_cash_flow: number
          operational_cash_flow: number
          operational_categories: Json
          operational_expense: number
          operational_income: number
          year: number
        }[]
      }
      calculate_partner_balance: {
        Args: { p_partner_id: string }
        Returns: undefined
      }
      calculate_running_balance_for_account_safe: {
        Args: { p_account_id: string; p_company_id: string }
        Returns: undefined
      }
      calculate_running_balance_incremental: {
        Args: {
          p_account_id: string
          p_company_id: string
          p_start_created_at?: string
          p_start_date: string
        }
        Returns: undefined
      }
      can_accept_invitation: { Args: { invite_code: string }; Returns: boolean }
      check_admin_access: { Args: never; Returns: boolean }
      check_inventory_availability: {
        Args: {
          p_material_id: string
          p_quantity: number
          p_source_warehouse_id: string
        }
        Returns: boolean
      }
      complete_partner_onboarding: {
        Args: { onboarding_data: Json; user_uuid: string }
        Returns: undefined
      }
      create_account_system_categories: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      create_kaspi_categories: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      create_kaspi_system_categories: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      create_partner_profile: {
        Args: {
          p_company_name?: string
          p_first_name: string
          p_last_name?: string
          p_phone?: string
          user_uuid: string
        }
        Returns: undefined
      }
      create_transaction_with_budget_check:
        | {
            Args: {
              p_account_id?: string
              p_amount: number
              p_category_id?: string
              p_comment?: string
              p_execution_date?: string[]
              p_is_paid: boolean
              p_payment_date: string
              p_project_id?: string
            }
            Returns: Json
          }
        | {
            Args: {
              p_account_id?: string
              p_amount: number
              p_category_id?: string
              p_comment?: string
              p_execution_date?: string[]
              p_is_paid: boolean
              p_payment_date: string
              p_project_id?: string
            }
            Returns: Json
          }
      create_unpaid_expense_with_additional_expense: {
        Args: {
          p_additional_expense_id: string
          p_amount: number
          p_category_id: string
          p_comment?: string
          p_manual_amount?: number
        }
        Returns: Json
      }
      create_unpaid_expense_without_budget_check: {
        Args: { p_amount: number; p_category_id: string; p_comment?: string }
        Returns: Json
      }
      create_warehouse: {
        Args: {
          p_description: string
          p_is_active: boolean
          p_location: string
          p_name: string
        }
        Returns: {
          company_id: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          kaspi_sync_enabled: boolean | null
          kaspi_warehouse_id: string | null
          location: string | null
          name: string
          updated_at: string
          user_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "warehouses"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      crypt: { Args: { password: string; salt: string }; Returns: string }
      decrement: { Args: { x: number }; Returns: number }
      delete_recurring_payment_with_transactions: {
        Args: { delete_all: boolean; payment_id: string }
        Returns: boolean
      }
      delete_transaction_with_allocations: {
        Args: { tx_id: string }
        Returns: undefined
      }
      delete_warehouse: { Args: { p_id: string }; Returns: Json }
      ensure_adjustment_categories: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      exec_sql: { Args: { params?: string[]; sql: string }; Returns: Json }
      force_delete_budget_allocations_for_transaction: {
        Args: { transaction_id_param: string }
        Returns: undefined
      }
      force_generate_recurring_transaction: {
        Args: { payment_id: string }
        Returns: boolean
      }
      force_generate_single_transaction: {
        Args: { payment_id: string }
        Returns: boolean
      }
      gen_salt: { Args: { type?: string }; Returns: string }
      generate_6digit_code: { Args: never; Returns: string }
      generate_recurring_transactions: { Args: never; Returns: undefined }
      generate_recurring_transactions_limited:
        | {
            Args: { monthly_limit: number; weekly_limit: number }
            Returns: undefined
          }
        | {
            Args: {
              monthly_limit: number
              skip_date_check?: boolean
              weekly_limit: number
            }
            Returns: undefined
          }
        | {
            Args: {
              monthly_limit?: number
              payment_id: string
              skip_date_check?: boolean
              weekly_limit?: number
            }
            Returns: number
          }
        | {
            Args: {
              monthly_limit?: number
              payment_id: number
              skip_date_check?: boolean
              weekly_limit?: number
            }
            Returns: number
          }
      generate_sku: {
        Args: { category_name: string; material_name: string }
        Returns: string
      }
      get_company_tags: {
        Args: { p_company_id: string }
        Returns: {
          color: string
          id: string
          is_custom: boolean
          is_enabled: boolean
          items: Json
          name: string
        }[]
      }
      get_inventory_by_warehouse: {
        Args: { warehouse_id_param: string }
        Returns: {
          batch_id: string
          category_id: string
          category_name: string
          inventory_id: string
          material_id: string
          material_name: string
          quantity: number
          remaining_quantity: number
          sku: string
          status: string
          unit_cost: number
          unit_shortname: string
          warehouse_id: string
          warehouse_name: string
        }[]
      }
      get_inventory_stock: {
        Args: never
        Returns: {
          batch_id: string
          category_id: string
          category_name: string
          inventory_id: string
          material_id: string
          material_name: string
          quantity: number
          remaining_quantity: number
          sku: string
          status: string
          unit_cost: number
          unit_shortname: string
          warehouse_id: string
          warehouse_name: string
        }[]
      }
      get_monthly_cash_flow_filtered_by_tags: {
        Args: { p_company_id: string; p_tag_item_ids: string[]; p_year: number }
        Returns: {
          category_amounts: Json
          company_id: string
          cumulative_balance: number
          expense_categories: Json
          financial_cash_flow: number
          financial_categories: Json
          financial_expense: number
          financial_income: number
          income_categories: Json
          initial_balance: number
          investment_cash_flow: number
          investment_categories: Json
          investment_expense: number
          investment_income: number
          last_updated: string
          month_initial_balance: number
          month_num: number
          net_cash_flow: number
          operational_cash_flow: number
          operational_categories: Json
          operational_expense: number
          operational_income: number
          year: number
        }[]
      }
      get_partner_id_from_session: { Args: never; Returns: string }
      get_partner_profile: {
        Args: { user_uuid?: string }
        Returns: {
          commission_rate: number
          company_name: string
          created_at: string
          email: string
          first_name: string
          id: string
          last_login: string
          last_name: string
          partner_level: string
          phone: string
          referral_code: string
          status: string
          updated_at: string
          user_id: string
        }[]
      }
      get_partner_rating: {
        Args: { time_period?: string }
        Returns: {
          avatar: string
          city: string
          current_month_earnings: number
          id: string
          last_month_earnings: number
          name: string
          partner_level: Database["public"]["Enums"]["partner_level"]
          quarter_earnings: number
          ranking_position: number
          status: string
          total_earnings: number
        }[]
      }
      get_profit_metrics_data: {
        Args: { p_company_id: string; p_year: number }
        Returns: {
          direct_costs: number
          financial_expenses: number
          fixed_costs: number
          gross_profit: number
          investment_expenses: number
          month_name: string
          month_number: number
          net_profit: number
          operating_profit: number
          revenue: number
          tax_expenses: number
          variable_costs: number
        }[]
      }
      get_trial_info: { Args: { company_id: string }; Returns: Json }
      get_warehouses: {
        Args: never
        Returns: {
          company_id: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          kaspi_sync_enabled: boolean | null
          kaspi_warehouse_id: string | null
          location: string | null
          name: string
          updated_at: string
          user_id: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "warehouses"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_warehouses_count: {
        Args: never
        Returns: {
          count: number
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "http_request"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_delete:
        | {
            Args: { uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { content: string; content_type: string; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_get:
        | {
            Args: { uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { data: Json; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_head: {
        Args: { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
        SetofOptions: {
          from: "*"
          to: "http_header"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_list_curlopt: {
        Args: never
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_post:
        | {
            Args: { content: string; content_type: string; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { data: Json; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_put: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_reset_curlopt: { Args: never; Returns: boolean }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      increment: { Args: { x: number }; Returns: number }
      initialize_all_running_balances: { Args: never; Returns: undefined }
      initialize_default_tags: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      invite_user_to_company: {
        Args: {
          p_company_id: string
          p_email: string
          p_permissions: string[]
          p_role?: Database["public"]["Enums"]["company_role"]
        }
        Returns: Json
      }
      is_admin: { Args: never; Returns: boolean }
      is_company_admin_or_owner: {
        Args: { company_id: string }
        Returns: boolean
      }
      is_company_member: {
        Args: { p_company_id: string; p_user_id: string }
        Returns: boolean
      }
      is_member_of_company: { Args: { company_id: string }; Returns: boolean }
      is_trial_active: { Args: { company_id: string }; Returns: boolean }
      manual_process_all_pending_kaspi_items: {
        Args: { p_company_id: string }
        Returns: Json
      }
      mark_transaction_as_paid: {
        Args: { p_transaction_id: string }
        Returns: Json
      }
      refresh_monthly_cash_flow: { Args: never; Returns: undefined }
      refresh_monthly_cash_flow_table: { Args: never; Returns: undefined }
      refresh_monthly_profit_loss: { Args: never; Returns: undefined }
      refresh_monthly_profit_loss_executed_table: {
        Args: never
        Returns: undefined
      }
      refresh_monthly_profit_loss_table: { Args: never; Returns: undefined }
      reset_budget_data: { Args: never; Returns: Json }
      restore_inventory_quantity: {
        Args: { amount: number; item_id: string }
        Returns: boolean
      }
      set_default_company: { Args: { p_company_id: string }; Returns: boolean }
      setup_account_system_categories: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      subtract_from_remaining: {
        Args: { amount: number; item_id: string }
        Returns: number
      }
      sync_account_transfer_categories: {
        Args: { p_company_id: string }
        Returns: undefined
      }
      sync_all_partner_clients: {
        Args: { p_partner_id: string }
        Returns: Json
      }
      sync_partner_client_status: {
        Args: { client_email: string }
        Returns: Json
      }
      text_to_bytea: { Args: { data: string }; Returns: string }
      transfer_inventory: {
        Args: {
          p_comment?: string
          p_destination_warehouse_id: string
          p_material_id: string
          p_quantity: number
          p_source_warehouse_id: string
        }
        Returns: Json
      }
      update_partner_last_login: {
        Args: { user_uuid?: string }
        Returns: undefined
      }
      update_partner_profile: {
        Args: {
          p_company_name?: string
          p_first_name?: string
          p_last_name?: string
          p_phone?: string
        }
        Returns: undefined
      }
      update_running_balance_for_transaction_change:
        | {
            Args: {
              p_new_amount: number
              p_new_category_type: string
              p_new_is_paid: boolean
              p_new_payment_date: string
              p_new_transaction_type: string
              p_old_amount: number
              p_old_category_type: string
              p_old_is_paid: boolean
              p_old_payment_date: string
              p_old_transaction_type: string
              p_transaction_id: string
            }
            Returns: undefined
          }
        | {
            Args: {
              p_new_amount?: number
              p_new_category_type?: string
              p_new_is_paid?: boolean
              p_old_amount?: number
              p_old_category_type?: string
              p_old_is_paid?: boolean
              p_transaction_id: string
            }
            Returns: undefined
          }
      update_warehouse: {
        Args: {
          p_description: string
          p_id: string
          p_is_active: boolean
          p_location: string
          p_name: string
        }
        Returns: {
          company_id: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          kaspi_sync_enabled: boolean | null
          kaspi_warehouse_id: string | null
          location: string | null
          name: string
          updated_at: string
          user_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "warehouses"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      urlencode:
        | { Args: { data: Json }; Returns: string }
        | {
            Args: { string: string }
            Returns: {
              error: true
            } & "Could not choose the best candidate function between: public.urlencode(string => bytea), public.urlencode(string => varchar). Try renaming the parameters or the function itself in the database so function overloading can be resolved"
          }
        | {
            Args: { string: string }
            Returns: {
              error: true
            } & "Could not choose the best candidate function between: public.urlencode(string => bytea), public.urlencode(string => varchar). Try renaming the parameters or the function itself in the database so function overloading can be resolved"
          }
    }
    Enums: {
      app_role: "admin" | "user"
      company_role: "owner" | "admin" | "member" | "viewer"
      operation_type: "writeoff" | "transfer" | "adjustment"
      partner_level: "trainee" | "basic" | "silver" | "gold" | "platinum"
      partner_status: "pending" | "approved" | "blocked" | "rejected"
    }
    CompositeTypes: {
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      company_role: ["owner", "admin", "member", "viewer"],
      operation_type: ["writeoff", "transfer", "adjustment"],
      partner_level: ["trainee", "basic", "silver", "gold", "platinum"],
      partner_status: ["pending", "approved", "blocked", "rejected"],
    },
  },
} as const
